import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'reactstrap';

let id = 0



const Todo = props => (
    <div>
        <Jumbotron>
            <h1>{props.title}</h1>
            <p className="lead">{props.description}</p>
            <hr className="my-2" />
            <Button onClick={props.onDelete} color="danger">Delete</Button>
        </Jumbotron>
    </div>
)

export default class FormDialog extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            open: false,
            title: "",
            desc: "",
        }
    }

    updateTitle(evt) {
        this.setState({
            title: evt.target.value
        })
    }

    updateDesc(evt) {
        this.setState({
            desc: evt.target.value
        })
        console.log(this.state)
    }

    addTodo(evn) {
        const title = this.state.title
        const description = this.state.desc
        this.setState({
            todos: [...this.state.todos, {title: title, description: description, id:id++}],
            open: false
        },)
    }

    deleteTodo(id) {
        this.setState({
            todos:this.state.todos.filter(todo => todo.id !== id)
        })
    }



    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    createNew = () => {
        console.log("Submit")
        this.setState({ open: false });
    }

    render() {
        return (
            <div>

                    {this.state.todos.map(todo => (<Todo onDelete={()=>this.deleteTodo(todo.id)} title={todo.title} description={todo.description}/>))}

                <Button style={
                    {alignItems: 'center'}
                } color={'info'} onClick={this.handleClickOpen}>New Todo +</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create New Todo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Enter the text
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            onChange={evt => this.updateTitle(evt)}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            multiline={true}
                            rows={5}
                            onChange={evt => this.updateDesc(evt)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="info">
                            Cancel
                        </Button>
                        <Button onClick={()=>this.addTodo()} color="info">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
