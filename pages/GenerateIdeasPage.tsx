import React, { useState, useCallback } from 'react';
import { generateIdeas } from '../services/ideaService';
import { GeneratedIdea } from '../types';
import Spinner from '../components/Spinner';
import { SparklesIcon } from '../components/icons/Icons';

const IdeaCard: React.FC<{ idea: GeneratedIdea }> = ({ idea }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 animate-fade-in shadow-lg hover:shadow-red-600/20 hover:border-red-600 transition-all duration-300">
    <h3 className="text-2xl font-bold text-white">{idea.title}</h3>
    <p className="mt-2 text-gray-300">{idea.logline}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {idea.tags.map(tag => (
        <span key={tag} className="px-3 py-1 text-xs font-medium bg-red-600/50 text-red-200 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);


const GenerateIdeasPage: React.FC = () => {
  const [theme, setTheme] = useState<string>('');
  const [ideas, setIdeas] = useState<GeneratedIdea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      // The UI component now calls the client-side service, not Gemini directly.
      const generatedIdeas = await generateIdeas(theme);
      setIdeas(generatedIdeas);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [theme, isLoading]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div className="text-center">
        <SparklesIcon className="mx-auto h-12 w-12 text-red-500" aria-hidden="true" />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Film Idea Generator
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Stuck for an idea? Let our AI-powered generator craft unique concepts for your next short film.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Enter a theme, e.g., 'a haunted library' or 'friendship in space'"
            className="flex-grow w-full px-5 py-3 text-lg bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !theme.trim()}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500 transition-transform hover:scale-105"
          >
            {isLoading ? 'Generating...' : 'Generate Ideas'}
          </button>
        </div>
      </form>

      <div className="mt-12">
        {isLoading && <Spinner />}
        {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>}
        {ideas.length > 0 && (
          <div className="grid gap-8 md:grid-cols-1">
            {ideas.map((idea, index) => (
              <IdeaCard key={index} idea={idea} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateIdeasPage;