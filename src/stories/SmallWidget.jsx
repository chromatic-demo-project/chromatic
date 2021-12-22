import { Button } from './Button';
import './small-widget.css';

export const SmallWidget = () => {
  return (<div className='small-widget'>
    <h2 class='sw-title'>Lorem ipsum dolor</h2>
    <Button label={'Foo Bar'} primary={true}></Button>
  </div>)
}