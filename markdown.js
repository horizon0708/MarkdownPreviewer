// [] I can type GitHub-flavored Markdown into a text area.
// []I can see a preview of the output of my markdown that is updated as I type.

// https://cdnjs.com/libraries/marked
// https://github.com/chjj/marked
//https://codepen.io/horizon0708/pen/dRmZbR

//var marked = require('marked');

class MainBody extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { rawtext: 'start' };

        this.onRawTextChange = this.onRawTextChange.bind(this);
    }

    onRawTextChange(text) {
        this.setState({ rawtext });
    }

    render() {
        const raxtext = this.state.rawtext;
        return (
            <div class="row">
                <TextInputField rawtext={rawtext} onTextChange={this.onRawTextChange} />
                <TextInputField rawtext={rawtext} onTextChange={this.onRawTextChange} />
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
                <textarea type="text" value={rawtext} style={style}/>
                <h1>whyy </h1>
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
            <div style={style}>ijfwf</div>
        );
    }
}

ReactDOM.render(

    <MainBody />
    , document.getElementById('root')
);