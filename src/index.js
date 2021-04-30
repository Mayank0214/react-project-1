import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

const App = () => {
return (

        <div class="ui container comments">

            <ApprovalCard>
                <CommentDetails 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                    date="Today at 4:00am" 
                    author={faker.name.firstName()}
                 />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                    date="Today at 4:00am" 
                    author={faker.name.firstName()}
                 />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                    date="Today at 4:00am" 
                    author={faker.name.firstName()}
                 />
            </ApprovalCard>
        </div>
            
);
};

ReactDOM.render(
    <App />,
    document.querySelector(`#root`)
);