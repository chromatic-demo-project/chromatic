import { Button } from './Button';
import './popup.css';

export const MyPopup = () => {
    return (
    <div className="popup">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro, iure alias. Voluptatem velit amet obcaecati iste delectus in, 
        dicta ratione autem quidem accusamus quam, rerum eum qui distinctio. Nemo, ab!
      </p>
      <Button label={'Foo Bar'} primary={true}></Button>
    </div>
    )
}     