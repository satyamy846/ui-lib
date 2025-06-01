import List from './List';
import List2 from './List2';
import List3 from './List3';
import List4 from './List4';
import List5 from './List5';
import List6 from './List6';
import ParentViewEditor from '../../utils/ParentViewEditor';

const ListPage = () => {
  return (
    <div>
        {/* Glassmorphism Task List */}
        <ParentViewEditor 
            renderPreview={<List />}  
            fileName="List" 
            folderName="Lists"
        />
        
        {/* Animated Features List */}
        <ParentViewEditor 
            renderPreview={<List2 />}  
            fileName="List2" 
            folderName="Lists"
        />
        
        {/* Social Media Feed List */}
        <ParentViewEditor 
            renderPreview={<List3 />}  
            fileName="List3" 
            folderName="Lists"
        />
        
        {/* Music Playlist List */}
        <ParentViewEditor 
            renderPreview={<List4 />}  
            fileName="List4" 
            folderName="Lists"
        />
        
        {/* E-commerce Product List */}
        <ParentViewEditor 
            renderPreview={<List5 />}  
            fileName="List5" 
            folderName="Lists"
        />
        
        {/* Contact Directory List */}
        <ParentViewEditor 
            renderPreview={<List6 />}  
            fileName="List6" 
            folderName="Lists"
        />
    </div>
  )
}

export default ListPage;