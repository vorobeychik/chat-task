import React,{useState} from "react";

export default function DropDownMenu(props) {
    const [open,setOpen] = useState(false);
    return (
         <div className={open ? 'menu menu__open':'menu'}>
            <p className={'dropDown__button'} onClick={() => setOpen(!open)}> {props.state.lang}</p>
             {open ?
                 <div className={'dropDown__container'}>
                     {props.children}
                 </div>:
                 ''
             }

         </div>
    )
}