import React from 'react'
import { List, Header } from 'semantic-ui-react'
import { BrandingWatermarkOutlined } from '@material-ui/icons'

export default class Weather extends React.Component {

    render() {
        return(
            <div className='ui segment padded inverted black'>
                <Header as='h3'>Pogoda w twojej lokalizacji:</Header>
                <List>
                    <List.Item>
                        <List.Icon name='thermometer half inverted olive' size="big"/>
                        <List.Content>Temperatura: {this.props.info?.main?.temp}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='thermometer full inverted olive' size="big" />
                        <List.Content>Temperatura odczuwalna: {this.props.info?.main?.feels_like}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='tachometer alternate inverted olive' size="big" />
                        <List.Content>Ciśnienie: {this.props.info?.main?.pressure}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='tint' size="big inverted olive" />
                        <List.Content>Wilgotność: {this.props.info?.main?.humidity}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='share inverted olive' size="big" />
                        <List.Content>Prędkość wiatru: {this.props.info?.wind?.speed}</List.Content>
                    </List.Item>
                </List>
            </div>                    
        )
    }
}
