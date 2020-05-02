import '../interfaces/ITalent';
import { ITalent } from '../interfaces/ITalent';

const talentsMap: { [id: string]: ITalent } = {
  chevron: {
    id: 'chevron',
    name: 'chevron',
    isActive: false,
    next: 'silverware',
    prev: '',
  },
  silverware: {
    id: 'silverware',
    name: 'silverware',
    isActive: false,
    next: 'cake',
    prev: 'chevron',
  },
  cake: {
    id: 'cake',
    name: 'cake',
    isActive: false,
    next: 'crown',
    prev: 'silverware',
  },
  crown: {
    id: 'crown',
    name: 'crown',
    isActive: false,
    next: '',
    prev: 'cake',
  },
  boat: {
    id: 'boat',
    name: 'boat',
    isActive: false,
    next: 'scuba',
    prev: '',
  },
  scuba: {
    id: 'scuba',
    name: 'scuba',
    isActive: false,
    next: 'lightening',
    prev: 'boat',
  },
  lightening: {
    id: 'lightening',
    name: 'lightening',
    isActive: false,
    next: 'skull',
    prev: 'scuba',
  },
  skull: {
    id: 'skull',
    name: 'skull',
    isActive: false,
    next: '',
    prev: 'lightening',
  },
};

export default talentsMap;
