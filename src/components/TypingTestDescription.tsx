import { highlightText } from '../helpers/functions';

export const TypingTestDescription = (): JSX.Element => (
  <span>
    This is an educational web application developed using{' '}
    {highlightText('React')} and {highlightText('TypeScript')}, inspired by
    MonkeyType. The app provides typing practice with the top 1000 most common
    words in both English and Ukrainian. Users can take timed tests of 15, 30,
    45, or 60 seconds, and the app tracks key statistics like{' '}
    {highlightText('WPM')}, {highlightText('accuracy')}, and accuracy counts of
    correct and incorrect characters.
    <p className="mt-2">
      The project helped me improve my understanding of {highlightText('React')}{' '}
      performance and component management.
    </p>
  </span>
);
