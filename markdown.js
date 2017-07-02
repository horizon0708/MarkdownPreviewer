// [] I can type GitHub-flavored Markdown into a text area.
// []I can see a preview of the output of my markdown that is updated as I type.

// https://cdnjs.com/libraries/marked
// https://github.com/chjj/marked
//https://codepen.io/horizon0708/pen/dRmZbR

//var marked = require('marked');

class MainBody extends React.Component {
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div class="row">
                <TextInputField />
                <Preview />
            </div>
            
        );
    }
}

class TextInputField extends React.Component {    
    render(){
            const style = {
        width: 300,
        height: 300
    };
        return(
            <div class='col-md-6'>
                <textarea type="text" style={style}></textarea>
            </div>
        );
    }
}

class Preview extends React.Component {
    render(){
        const style = {
            width: 300,
            height: 300
        };
        return(
            <div class='col-md-6'>
                <div style={style}>ijfwf</div>
            </div>
        );
    }
}

ReactDOM.render(
    <div class="container">
        <MainBody />
    </div>,
    document.getElementById('root')
);