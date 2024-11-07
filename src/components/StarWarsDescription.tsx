import { highlightText } from '../helpers/functions';

export const StarWarsDescription = () => {
  return (
    <span>
      This is an educational web application developed using{' '}
      {highlightText('Vite')}, {highlightText('React')}, and{' '}
      {highlightText('TypeScript')}. The app allows users to explore a vast
      database of Star Wars heroes through an infinite scroll feature that loads
      more heroes as the user scrolls down, providing a seamless browsing
      experience. When a hero is selected, a detailed graph is displayed using{' '}
      {highlightText('React Flow')}, illustrating connections between the
      selected hero, the movies they appear in, and the starships they have
      traveled on. The project incorporates {highlightText('Jest')} and{' '}
      {highlightText('React Testing Library')} for testing the app’s core
      components and logic, ensuring reliability and stability as the codebase
      evolves.
      <p className="mt-2">
        Overall, this project enhanced my skills in {highlightText('React')}{' '}
        development and component management.
      </p>
    </span>
  );
};
