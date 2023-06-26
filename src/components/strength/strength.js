import StrengthStyle from '../strength/strength.css';
import AddStrength from '../addStrength/addStrength';
function Strength(){
    return (
        <div className="container background text-dark text-center">
            <h1 className='mb-5'>Strength</h1>
            <AddStrength/>
        </div>
    );
};

export default Strength;