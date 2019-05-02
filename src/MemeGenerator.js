import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topTxt: "",
      bottomTxt: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        console.log(memes[0]);

        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit(e) {
    e.preventDefault()
    const randnNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randnNum].url
    this.setState({ randomImg: randMemeImg })
  }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input type="text" name="topTxt" value={this.state.topTxt} placeholder="Top Text" onChange={this.handleChange} />
          <input type="text" name="bottomTxt" value={this.state.bottomTxt} placeholder="Bottom Text" onChange={this.handleChange} />
          <button>GEN</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topTxt}</h2>
          <h2 className="bottom">{this.state.bottomTxt}</h2>
        </div>
      </div>
    )
  }
}
export default MemeGenerator