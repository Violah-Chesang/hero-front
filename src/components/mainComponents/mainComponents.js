import React from "react";
function MainComponents(){
    return(
        <div className="m-5">
            <div className="row">
                <div className="col-6"><button>Strengths</button></div>
                <div className="col-6"><button>weaknesses</button></div>
            </div>

            <div className="row">
                <div className="col-6"><button>Squads</button></div>
                <div className="col-6"><button>Heroes</button></div>
            </div>
        </div>
    );
};

export default MainComponents;