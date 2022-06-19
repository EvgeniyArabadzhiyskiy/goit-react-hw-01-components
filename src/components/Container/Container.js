import stl from "./Container.module.css";

const Container = ({children}) => {
    return ( <div className={stl.container}>{children}</div> );
}
 
export default Container;