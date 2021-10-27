import { React, Component } from 'react';
import { Table } from 'react-bootstrap';


class ParkinglotTable extends Component {
    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>공항명(한글)</th>
                        <th>공항명(영어)</th>
                        <th>주차장명</th>
                        <th>전체 주차면 수</th>
                        <th>입고된 차량 수</th>
                        <th>출고된 차량 수</th>
                        <th>현재 주차 차량 수</th>
                        <th>업데이트 일자</th>
                        <th>업데이트 시간</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.parkingData.map((row) => {
                        return(
                        <tr>
                            <td>{row.aprKor}</td>
                            <td>{row.aprEng}</td>
                            <td>{row.parkingAirportCodeName}</td>
                            <td>{row.parkingFullSpace}</td>
                            <td>{row.parkingIincnt}</td>
                            <td>{row.parkingIoutcnt}</td>
                            <td>{row.parkingIstay}</td>
                            <td>{row.parkingGetdate}</td>
                            <td>{row.parkingGettime}</td>
                        </tr>
                        )
                        
                        
                    })}
                    
                </tbody>
            </Table>
        )
    }
}

export default ParkinglotTable;