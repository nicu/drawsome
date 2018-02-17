import React from 'react';
import Drawing from './Drawing';
import ColorTools from './ColorTools';

import './Artwork.css'
class Artwork extends React.Component {

    getLeftLies(lies) {
        return lies.filter((e, i) => i % 2 === 0);
    }

    getRightLies(lies) {
        return lies.filter((e, i) => i % 2 !== 0);
    }

    getLieElement = lie => {
        return (
            <li key={lie.text}>
                <div className="lie-text">{lie.text.toLowerCase()}</div>
                <div className="lie-metadata">by <span>{lie.player.name.toLowerCase()}</span></div>
            </li>
        )};

    render() {
        return (
            <div className="artwork" style={{backgroundColor: ColorTools.getColorsFromLines(this.props.lines)[0], color: ColorTools.getTextColorForBackground((ColorTools.getColorsFromLines(this.props.lines)[0]).substr(1))}}>
                <div className="lies">
                    <ul>
                        {
                            this.getLeftLies(this.props.lies).map(this.getLieElement)
                        }
                    </ul>
                </div>
                <div className="drawing">
                    <Drawing lines={this.props.lines} />
                    <div>
                        <div className="title">{this.props.title.text.toLowerCase()}</div>
                        <div className="metadata"> by <span>{this.props.player.name.toLowerCase()}</span></div>
                    </div>
                </div>
                <div className="lies">
                    <ul>
                        {
                            this.getRightLies(this.props.lies).map(this.getLieElement)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

Artwork.propTypes = {
  lines: React.PropTypes.array.isRequired,
  title: React.PropTypes.object.isRequired,
  player: React.PropTypes.object.isRequired,
  lies: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func,
};

export default Artwork;
