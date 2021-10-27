import { React, Component } from 'react';
import { Button } from 'react-bootstrap';

class ParkinglotButton extends Component {
    render() {
        return (
            <div className="BtnBox">
            {
                this.props.airport_list ? 
                this.props.airport_list.map((row, idx) => {
                    return (
                        <Button onClick={(e) => this.props.Test(row.idx)} className="mb-2"
                                variant="secondary" 
                                key={idx} 
                                size="lg" 
                                active>
                            {row.name}
                        </Button>
                    )
                }) :
                <Button>ㄷ데이터를 확인할 수 없습니다</Button>
            }
            </div>
        );
    }
}

export default ParkinglotButton;