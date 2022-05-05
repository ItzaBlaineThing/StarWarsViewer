import React from 'react';
import { Col, Row } from '../Flexbox/Flexbox.styled';
import { ResultItemLabel, ResultItemSection, ResultItemText, ResultItemWrapper } from './ResultItem.styled';

export const ResultItem = ({ config, result, updateResult }) => {

    // console.log(config);
    // console.log(result);

    return (
        <ResultItemWrapper onClick={() => updateResult(result)} className="result-item">
            <Row>
                {config.map(item => {
                    {/* console.log(item);
                    console.log(result[item]); */}
                    return (
                        <ResultItemSection key={item}>
                            <Col>
                                <ResultItemLabel>{item}</ResultItemLabel>
                                <ResultItemText>{result[item]}</ResultItemText>
                            </Col>
                        </ResultItemSection>
                    )
                })}
            </Row>
        </ResultItemWrapper>
    )
}