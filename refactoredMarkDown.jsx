var startText = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'

class MainBody extends React.Component{
    constructor (prop){
        super(prop);
        this.state = {rawtext: startText};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({rawtext: e.target.value});
    }
    getMarkDownText(){
        var text = marked(this.state.rawtext, {sanitize: true});
        return {__html: text};
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                      <div id="output">
                        <div dangerouslySetInnerHTML={this.getMarkDownText()} />          
                      </div>
                    </div>
                    <div className="col-md-6" id="input">
                        <div id="input">
                            <textarea type="text" onChange={this.handleChange}>{startText}</textarea>                          
                        </div>
                    </div>
                    
                </div>               
            </div>
        );
    }
}

ReactDOM.render(
    <MainBody />,
    document.getElementById('root')
)