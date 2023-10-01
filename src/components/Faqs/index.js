// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div>
      
    <div style={{marginTop:"-8%"}} className="app-container">
      <div className="faqs-container">
        <h1 className="heading">Frequently Asked Questions</h1>
     
        <ul  style={{marginTop:"2%"}} className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}

        </ul>
        
      </div>
    </div>
    </div>
  )
}

export default Faqs
