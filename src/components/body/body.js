import Search from '../search/search';
import Description from '../description/description';
import MainComponents from '../mainComponents/mainComponents';
function Body(){
    return(
        <div className="container">
            <div className='row'>
                <div className='col-2'>
                    <Search />
                </div>
                <div className='col-10'>
                    <Description />
                    <div>
                        <MainComponents />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Body;