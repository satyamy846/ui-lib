import React from 'react'
import Button from './Button';
import Button2 from './button2';
import ParentViewEditor from '../../utils/ParentViewEditor';

const ButtonPage = () => {
  return (
    <div>
        <ParentViewEditor renderPreview={<Button />}  fileName="Button" folderName="Buttons"/>
        <ParentViewEditor renderPreview={<Button2 />}  fileName="Button2" folderName="Buttons"/>
        {/* <Button></Button> */}
        {/* <Button2></Button2> */}
    </div>
  )
}

export default ButtonPage;