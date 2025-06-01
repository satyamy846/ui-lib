import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import ParentViewEditor from '../../utils/ParentViewEditor';


const CardPage = () => {
    return (
      <div>
          {/* Card1 */}
          <ParentViewEditor 
              renderPreview={<Card1 />}  
              fileName="Card1" 
              folderName="Card"
          />

          {/* Card2 */}
          <ParentViewEditor 
              renderPreview={<Card2 />}  
              fileName="Card2" 
              folderName="Card"
          />

          {/* Card3 */}
          <ParentViewEditor 
              renderPreview={<Card3 />}  
              fileName="Card3" 
              folderName="Card"
          />

          {/* Card4 */}
          <ParentViewEditor 
              renderPreview={<Card4 />}  
              fileName="Card4" 
              folderName="Card"
          />
          

      </div>
    )
  }
  
  export default CardPage;