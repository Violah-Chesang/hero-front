import React from "react";
function AddStrength(){
    return(
        <div>
            <h3>Add a Strength</h3>
            <p>To Create a strength, Give it a <b>name</b> and a <b>value.</b></p>
            <form>
                {/* Strength's name */}
                <div className="mb-3">
                    <label htmlFor="strength" className="form-label mr-3">Strength: </label>
                    <input type="text" className="form-contol" id="strength" name="strength" placeholder="Courageous" />
                </div>
                {/* Strength's value*/}
                <div className="mb-3">
                    <label htmlFor="value" className="form-label mr-3">Value: </label>
                    <input type="number" className="form-contol" id="value" name="value" placeholder="20"/>
                </div>
                <input type="submit" className="btn btn-primary mb-5" value="Submit"/>



            </form>

        </div>
    );
};

export default AddStrength