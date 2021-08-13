import { v4 as uuidv4 } from 'uuid';
import image1 from '../asset/images/1.jpg';
import image2 from '../asset/images/2.jpg';
import image3 from '../asset/images/3.jpg';
import image4 from '../asset/images/4.jpg';


const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subtitle: 'Lorem',
    image: { image1 },

  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subtitle: 'Lorem',
    image: { image2 },

  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subtitle: 'Lorem',
    image: { image3 },
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subtitle: 'Lorem',
    image: { image4 },
  },
];

export default dataSlider;
