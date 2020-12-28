import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import originalImage from './images/ny_original.jpg';
import './App.css';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Piotr Sobieszczyk- Puzzle',
  description: 'Puzzle',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
      author: 'Piotr Sobieszczyk',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
};

class Jigsaw extends Component {
  state = {
    pieces: [],
    shuffled: [],
    solved: []
  };

  componentDidMount() {
    const pieces = [...Array(16)]
      .map((_, i) => (
        {
          img: `ny__0${('0' + (i + 1)).substr(-2)}.png`,
          order: i,
          board: 'shuffled'
        }
      ));

    this.setState({
      pieces,
      shuffled: this.shufflePieces(pieces),
      solved: [...Array(16)]
    });
  }

  handleDrop(e, index, targetName) {
    let target = this.state[targetName];
    if (target[index]) return;

    const pieceOrder = e.dataTransfer.getData('text');
    const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
    const origin = this.state[pieceData.board];

    if (targetName === pieceData.board) target = origin;
    origin[origin.indexOf(pieceData)] = undefined;
    target[index] = pieceData;
    pieceData.board = targetName;

    this.setState({ [pieceData.board]: origin, [targetName]: target })
  }

  handleDragStart(e, order) {
    const dt = e.dataTransfer;
    dt.setData('text/plain', order);
    dt.effectAllowed = 'move';
  }

  handleDragStart2(e, order) {
    console.log("hehe")
  }

  render() {
    return (
      <div className="jigsaw">
        <div>
          Autor: Piotr Sobieszczyk
        </div>
        <ul className="jigsaw__shuffled-board">
          {this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, 'shuffled'))}
        </ul>
        <ol className="jigsaw__solved-board" style={{ backgroundImage: `url(${originalImage})` }}>
          {this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, 'solved'))}
        </ol>
      </div>
    );
  }

  renderPieceContainer(piece, index, boardName) {

    return (
      <li
        key={index}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => this.handleDrop(e, index, boardName)}>
        {
          piece && <img
          alt="Img"
          draggable
            onTouchMove={(e) => this.handleDragStart2(e, piece.order)}
            onDragStart={(e) => this.handleDragStart(e, piece.order)}
            src={require(`./images/${piece.img}`)} />
        }
      </li>
    );
  }

  shufflePieces(pieces) {
    const shuffled = [...pieces];

    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }

    return shuffled;
  }
}


ReactDOM.render(
<DocumentMeta {...meta}><Jigsaw /></DocumentMeta>
, document.querySelector('#app-root'));