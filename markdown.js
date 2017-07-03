// [] I can type GitHub-flavored Markdown into a text area.
// []I can see a preview of the output of my markdown that is updated as I type.

// https://cdnjs.com/libraries/marked <-- this one does not work, and its bloody from FCC!!!!
// https://github.com/chjj/marked
//https://codepen.io/horizon0708/pen/dRmZbR

//var marked = require('marked');

class MainBody extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { rawtext: 'wef' };

        this.onRawTextChange = this.onRawTextChange.bind(this);
    }
     getMarkdownText(){
        var toast = marked(this.state.rawtext, {sanitize: true});
        return { __html: toast};
    }

    onRawTextChange(rawtext) {
        this.setState({ rawtext });
    }

    render() {
        const text = this.state.rawtext;
        return (
            <div class="row">
                <div dangerouslySetInnerHTML={this.getMarkdownText()} />
                <TextInputField onTextChange={this.onRawTextChange} />
                <Preview rawtext={text} />
            </div>
        );
    }
}

class TextInputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextChange(e.target.value);
    }

    render() {
        const style = {
            width: 300,
            height: 300
        };
        const rawtext = this.props.rawtext;

        return (
            <div>
                <textarea type="text" style={style} onChange={this.handleChange} />
            </div>
        );
    }
}

class Preview extends React.Component {
   
    render() {
        const style = {
            width: 300,
            height: 300
        };
        const rawtext = this.props.rawtext;
        return (
            <div>
            <div style={style}>{rawtext}</div>
            
            </div>
        );
    }
}

ReactDOM.render(
    <MainBody />
    , document.getElementById('root')
);