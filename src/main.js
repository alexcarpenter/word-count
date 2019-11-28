import { compose, filter, length, split } from './utils';

const wordCount = compose(length, filter(Boolean), split(' '));

export default wordCount;
