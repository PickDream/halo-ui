import React from 'react';
import './styles/index.scss'
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Alert from './components/Alert';
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helo Components</h1>
        <hr/>
        <h2>Button</h2>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Warning}>Waring</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link</Button>
        <Button disabled>Disabled</Button>
        <br/>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Middle}>Primary-Md</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Middle}>Default-Md</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Middle}>Danger-Md</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Middle}>Danger-Md</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link-Md</Button>
        <Button disabled size={ButtonSize.Middle}>Disabled</Button>
        <br/>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary-Large</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default-Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger-Large</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Large}>Waring-Large</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"} size={ButtonSize.Large}>Link-Large</Button>
        <h2>Alert</h2>
        <Alert title={'hello~'} type={'warning'} closable />
        <Alert title={'this is info Alert~'} description={"description"} type={'primary'} closable onClose={(e)=>{alert("你关闭了一个Alert");console.log(e)}} />
        <Alert title={'hello~'} type={'error'} closable />
        <Alert title={'hello~'} type={'success'} closable={false}/>
        <h2>Menu</h2>
        <Menu defaultIndex={0} onSelect={(index)=>{alert(index)}}>
          {
            [0,1,2].map((val)=>{
              return (
                  <MenuItem index={val}>
                      Item {val}
                  </MenuItem>)
            })
          }
        </Menu>
        <h1>Halo</h1>
        <h2>Halo</h2>
        <h3>Halo</h3>
        <hr/>
        <code>
          const a = b;
        </code>

      </header>
    </div>
  );
}

export default App;
