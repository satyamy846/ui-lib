import React from 'react'
import List from './List';
import List2 from './List2';
import ParentViewEditor from '../../utils/ParentViewEditor';

const ListPage = () => {
  return (
    <div>
        <ParentViewEditor renderPreview={<List />}  fileName="List" folderName="Lists"/>
        <ParentViewEditor renderPreview={<List2 />}  fileName="List2" folderName="Lists"/>
    </div>
  )
}

export default ListPage;