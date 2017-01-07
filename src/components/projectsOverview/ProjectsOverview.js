import React, {Component} from "react";
import {Row, Column} from "hedron";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';


class ProjectsOverview extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Column sm={12} md={12} lg={12}>
                        <Card>
                            <Table selectable={false}
                                   fixedHeader={true}
                                   height="250px">
                                <TableHeader displaySelectAll={false}
                                             adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>PHE</TableHeaderColumn>
                                        <TableHeaderColumn>Location</TableHeaderColumn>
                                        <TableHeaderColumn>Date</TableHeaderColumn>
                                        <TableHeaderColumn>Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}
                                           showRowHover={true}>
                                                <TableRow key="test">
                                                    <TableRowColumn>pew</TableRowColumn>
                                                    <TableRowColumn>pew</TableRowColumn>
                                                    <TableRowColumn>pew</TableRowColumn>
                                                    <TableRowColumn>pew</TableRowColumn>
                                                </TableRow>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </Card>
                    </Column>
                    <Column sm={12} md={12} lg={12}>
                        <Card>
                            <Table selectable={false}
                                   fixedHeader={true}
                                   height="250px">
                                <TableHeader displaySelectAll={false}
                                             adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>PHE</TableHeaderColumn>
                                        <TableHeaderColumn>Location</TableHeaderColumn>
                                        <TableHeaderColumn>Date</TableHeaderColumn>
                                        <TableHeaderColumn>Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}
                                           showRowHover={true}>
                                    <TableRow key="test">
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                    </TableRow>
                                    )
                                    })}
                                </TableBody>
                            </Table>
                        </Card>
                    </Column>
                    <Column sm={12} md={6} lg={6}>
                        <Card>
                            <Table selectable={false}
                                   fixedHeader={true}
                                   height="250px">
                                <TableHeader displaySelectAll={false}
                                             adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>PHE</TableHeaderColumn>
                                        <TableHeaderColumn>Location</TableHeaderColumn>
                                        <TableHeaderColumn>Date</TableHeaderColumn>
                                        <TableHeaderColumn>Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}
                                           showRowHover={true}>
                                    <TableRow key="test">
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                    </TableRow>
                                    )
                                    })}
                                </TableBody>
                            </Table>
                        </Card>
                    </Column>
                    <Column sm={12} md={6} lg={6}>
                        <Card>
                            <Table selectable={false}
                                   fixedHeader={true}
                                   height="250px">
                                <TableHeader displaySelectAll={false}
                                             adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>PHE</TableHeaderColumn>
                                        <TableHeaderColumn>Location</TableHeaderColumn>
                                        <TableHeaderColumn>Date</TableHeaderColumn>
                                        <TableHeaderColumn>Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}
                                           showRowHover={true}>
                                    <TableRow key="test">
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                        <TableRowColumn>pew</TableRowColumn>
                                    </TableRow>
                                    )
                                    })}
                                </TableBody>
                            </Table>
                        </Card>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default ProjectsOverview;