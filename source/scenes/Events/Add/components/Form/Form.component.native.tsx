import * as React from 'react';
import { Container, Input, Button } from '../../styles/Add.styles.native';
import { PropsInterface } from "./Form.interfaces";

const Form: React.SFC<PropsInterface> = ({ parent }): JSX.Element => (
    <Container>
        <Input value={parent.title} onChangeText={(_title: string) => parent.title = _title} />
        <Input value={parent.description} onChangeText={(_description: string) => parent.description = _description} />
        <Input value={parent.date} onChangeText={(_date: string) => parent.date = _date} />
        <Input value={parent.location} onChangeText={(_location: string) => parent.location = _location} />
        <Input value={parent.price.toString()} onChangeText={(_price: string) => parent.price = parseInt(_price) || 0} keyboardType="numeric"/>
        <Button onPress={() => {}} title="Добавить" />
    </Container>
);

export default Form;