import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-kanban";

export default function Todo() {
    let data = [
        { Id: 1,  Title: 'Task - 29020', Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
        { Id: 2,   Title: 'Task - 29021',Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2 },
        { Id: 3,  Title: 'Task - 29022' ,Status: 'Testing', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Steven walker', RankId: 1 },
        { Id: 4,   Title: 'Task - 29022',Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Michael Suyama', RankId: 1 },
        { Id: 5,   Title: 'Task - 29023',Status: 'Close', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert King', RankId: 1 },
        { Id: 6,  Title: 'Task - 29024', Status: 'InProgress', Summary: 'Fix the issues reported in Chrome browser.', Type: 'Improvement', Priority: 'High', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert Kan', RankId: 1 },
        { Id: 7,  Title: 'Task - 29025', Status: 'InProgress', Summary: 'Arrange a web meeting with the customer to get new requirements.', Type: 'Improvement', Priority: 'High', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert Kan', RankId: 1 },
        { Id: 8,  Title: 'Task - 29026', Status: 'Close', Summary: 'Fix the issues of user not able to login in Chrome browser.', Type: 'Improvement', Priority: 'High', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert Kan', RankId: 1 },
        { Id: 9,   Title: 'Task - 29027',Status: 'Open', Summary: 'User are not able to order Grocery from mobile App', Type: 'Improvement', Priority: 'High', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert Kan', RankId: 1 },
        { Id: 10,  Title: 'Task - 29028', Status: 'Testing', Summary: 'Fix the Navbar issue.', Type: 'Improvement', Priority: 'High', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert Kan', RankId: 1 },
        {
            Id: '11',
            Title: 'Task - 29025',
            Status: 'Open',
            Summary: 'Enhance editing functionality.',
            Type: 'Improvement',
            Priority: 'Low',
            Tags: 'Editing',
            Estimate: 3.5,
            Assignee: 'Andrew Fuller',
            RankId: 5,
            Color: '#673AB8',
            ClassName: 'e-improvement, e-low, e-andrew-fuller',
        },
        {
            Id: '12',
            Title: 'Task - 29026',
            Status: 'InProgress',
            Summary: 'Improve the performance of the editing functionality.',
            Type: 'Epic',
            Priority: 'High',
            Tags: 'Performance',
            Estimate: 6,
            Assignee: 'Nancy Davloio',
            RankId: 5,
            Color: '#e91e64',
            ClassName: 'e-epic, e-high, e-nancy-davloio',
        },
        {
            Id: 'T13',
            Title: 'Task - 29027',
            Status: 'Open',
            Summary: 'Arrange web meeting with the customer to show editing demo.',
            Type: 'Others',
            Priority: 'High',
            Tags: 'Meeting,Editing',
            Estimate: 5.5,
            Assignee: 'Steven walker',
            RankId: 6,
            Color: '#1F88E5',
            ClassName: 'e-others, e-high, e-steven-walker',
        },
        {
            Id: '14',
            Title: 'Task - 29029',
            Status: 'Review',
            Summary: 'Fix the editing issues reported by the customer.',
            Type: 'Bug',
            Priority: 'Low',
            Tags: 'Editing,Fix',
            Estimate: '3.5',
            Assignee: 'Janet Leverling',
            RankId: 6,
            Color: '#E64A19',
            ClassName: 'e-bug, e-low, e-janet-leverling',
        },
        {
            Id: '15',
            Title: 'Task - 29030',
            Status: 'Testing',
            Summary: 'Fix the issues reported by the customer.',
            Type: 'Bug',
            Priority: 'Critical',
            Tags: 'Customer',
            Estimate: '3.5',
            Assignee: 'Steven walker',
            RankId: 1,
            Color: '#E64A19',
            ClassName: 'e-bug, e-critical, e-steven-walker',
        },
        {
            Id: '16',
            Title: 'Task - 29031',
            Status: 'Testing',
            Summary: 'Fix the issues reported in Safari browser.',
            Type: 'Bug',
            Priority: 'Critical',
            Tags: 'Fix,Safari',
            Estimate: 1.5,
            Assignee: 'Nancy Davloio',
            RankId: 2,
            Color: '#E64A19',
            ClassName: 'e-bug, e-release, e-nancy-davloio',
        }

    ]

    return (
        <div className="App">
            <h3 className='py-2'>Kanban</h3>
            <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Title" }}
                enableTooltip="true" swimlaneSettings={{keyField:"Assignee"}} height="800px"
            >
                <ColumnsDirective>
                    <ColumnDirective headerText="To Do" keyField="Open" />
                    <ColumnDirective headerText="In Progress" keyField="InProgress" />
                    <ColumnDirective headerText="Testing" keyField="Testing" />
                    <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}
