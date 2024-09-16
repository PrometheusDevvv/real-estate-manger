import AddAgentModal from './AddAgentModal'
import PlusRounded from '../assets/icons/PlusRounded'

const CreateButtons = () => {
  return (
    <>
    <div className="actions-container">
       
      

       <button className="action-button add-agent">
         <div className="action-icon-plus"><PlusRounded color="#F93B1D" /></div>
         <span className="action-label">ლისტინგის დამატება</span>
       </button>

       <AddAgentModal/>

    </div>
       </>
  )
}

export default CreateButtons