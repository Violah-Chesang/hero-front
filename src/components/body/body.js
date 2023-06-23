import Search from '../search/search';
function Body(){
    return(
        <div className="container">
            <div className='row'>
                <div className='col-2'>
                    <Search />
                </div>
                <div className='col-10'>
                    <Search />
                </div>
            </div>
        </div>
    );
};


export default Body;