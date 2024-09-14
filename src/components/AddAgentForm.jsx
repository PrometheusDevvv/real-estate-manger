
const AddAgentForm = () => {
    return (
  <>
   <div className="add-agent-form">
        <div className="agent-form-field">
            <div className="agent-form-group">
                <label className="agent-form-label">სახელი *</label>
                <input className="agent-form-input"></input>
                <span className="input-warning">მინიმუმ ორი სიმბოლო</span>

            </div>
        
            <div className="agent-form-group">
                <label className="agent-form-label">გვარი</label>
                <input className="agent-form-input"></input>
                <span className="input-warning">მინიმუმ ორი სიმბოლო</span>

            </div>
        </div>
        <div className="agent-form-field">
            <div className="agent-form-group">
                <label className="agent-form-label">ელ-ფოსტა*</label>
                <input className="agent-form-input"></input>
                <span className="input-warning">მინიმუმ ორი სიმბოლო</span>

            </div>
        
            <div className="agent-form-group">
                <label className="agent-form-label">ტელეფონის ნომერი</label>
                <input className="agent-form-input"></input>
<span className="input-warning">მინიმუმ ორი სიმბოლო</span>
            </div>
        </div>

        <div className="agent-form-field">
            <div className="agent-form-group">
                <label className="agent-form-label">ატვირთეთ ფოტო*</label>
                <input className="agent-form-file"></input>
            </div>
        </div>
   </div>
   
   
  </>
    );
};

export default AddAgentForm;
