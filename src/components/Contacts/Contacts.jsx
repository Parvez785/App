import React from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar, Filter, Selection, Page,Sort ,Search} from
 '@syncfusion/ej2-react-grids';
import { Update } from '@mui/icons-material';
export default function Contacts() {
       const data = [
            {
              CustomerID: 1001,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
            
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            },
            {
              CustomerID: 1002,
          
              CustomerName: 'Sunil Joshi',
              CustomerEmail: 'sunil@gmail.com',
              ProjectName: 'Elite Admin',
              Status: 'Active',
        
              StatusBg: '#8BE78B',
              Weeks: '11',
              Budget: '$3.9k',
              Location: 'India',
            },
            {
              CustomerID: 1003,
          
              CustomerName: 'Andrew McDownland',
              CustomerEmail: 'andrew@gmail.com',
              ProjectName: 'Real Homes WP Theme',
              Status: 'Pending',
            
              StatusBg: '#FEC90F',
              Weeks: '19',
              Budget: '$24.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1004,
          
              CustomerName: 'Christopher Jamil',
              CustomerEmail: 'jamil@gmail.com',
              ProjectName: 'MedicalPro WP Theme',
              Status: 'Completed',
        
              StatusBg: '#8BE78B',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1005,
          
              CustomerName: 'Michael',
              CustomerEmail: 'michael@gmail.com',
              ProjectName: 'Weekly WP Theme',
              Status: 'Cancel',
            
              StatusBg: 'red',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1006,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            },
            {
              CustomerID: 1007,
          
              CustomerName: 'Sunil Joshi',
              CustomerEmail: 'sunil@gmail.com',
              ProjectName: 'Elite Admin',
              Status: 'Active',
        
              StatusBg: '#8BE78B',
              Weeks: '11',
              Budget: '$3.9k',
              Location: 'India',
            },
            {
              CustomerID: 1008,
          
              CustomerName: 'Andrew McDownland',
              CustomerEmail: 'andrew@gmail.com',
              ProjectName: 'Real Homes WP Theme',
              Status: 'Pending',
              StatusBg: '#FEC90F',
              Weeks: '19',
              Budget: '$24.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1009,
          
              CustomerName: 'Christopher Jamil',
              CustomerEmail: 'jamil@gmail.com',
              ProjectName: 'MedicalPro WP Theme',
              Status: 'Completed',
              StatusBg: '#8BE78B',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1010,
          
              CustomerName: 'Michael',
              CustomerEmail: 'michael@gmail.com',
              ProjectName: 'Weekly WP Theme',
              Status: 'Cancel',
              StatusBg: 'red',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1011,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            },
            {
              CustomerID: 1012,
          
              CustomerName: 'Sunil Joshi',
              CustomerEmail: 'sunil@gmail.com',
              ProjectName: 'Elite Admin',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '11',
              Budget: '$3.9k',
              Location: 'India',
            },
            {
              CustomerID: 1013,
          
              CustomerName: 'Andrew McDownland',
              CustomerEmail: 'andrew@gmail.com',
              ProjectName: 'Real Homes WP Theme',
              Status: 'Pending',
              StatusBg: '#FEC90F',
              Weeks: '19',
              Budget: '$24.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1014,
          
              CustomerName: 'Christopher Jamil',
              CustomerEmail: 'jamil@gmail.com',
              ProjectName: 'MedicalPro WP Theme',
              Status: 'Completed',
              StatusBg: '#8BE78B',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1015,
          
              CustomerName: 'Michael',
              CustomerEmail: 'michael@gmail.com',
              ProjectName: 'Weekly WP Theme',
              Status: 'Cancel',
              StatusBg: 'red',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1016,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            },
            {
              CustomerID: 1017,
          
              CustomerName: 'Sunil Joshi',
              CustomerEmail: 'sunil@gmail.com',
              ProjectName: 'Elite Admin',
              Status: 'Active',
            
          
              StatusBg: '#8BE78B',
              Weeks: '11',
              Budget: '$3.9k',
              Location: 'India',
            },
            {
              CustomerID: 1018,
          
              CustomerName: 'Andrew McDownland',
              CustomerEmail: 'andrew@gmail.com',
              ProjectName: 'Real Homes WP Theme',
              Status: 'Pending',
        
              StatusBg: '#FEC90F',
              Weeks: '19',
              Budget: '$24.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1019,
          
              CustomerName: 'Christopher Jamil',
              CustomerEmail: 'jamil@gmail.com',
              ProjectName: 'MedicalPro WP Theme',
              Status: 'Completed',

              StatusBg: '#8BE78B',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1020,
          
              CustomerName: 'Michael',
              CustomerEmail: 'michael@gmail.com',
              ProjectName: 'Weekly WP Theme',
              Status: 'Cancel',
              StatusBg: 'red',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1021,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
        
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            },
            {
              CustomerID: 1022,
          
              CustomerName: 'Sunil Joshi',
              CustomerEmail: 'sunil@gmail.com',
              ProjectName: 'Elite Admin',
              Status: 'Active',
        
              StatusBg: '#8BE78B',
              Weeks: '11',
              Budget: '$3.9k',
              Location: 'India',
            },
            {
              CustomerID: 1023,
          
              CustomerName: 'Andrew McDownland',
              CustomerEmail: 'andrew@gmail.com',
              ProjectName: 'Real Homes WP Theme',
              Status: 'Pending',
        
              StatusBg: '#FEC90F',
              Weeks: '19',
              Budget: '$24.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1024,
          
              CustomerName: 'Christopher Jamil',
              CustomerEmail: 'jamil@gmail.com',
              ProjectName: 'MedicalPro WP Theme',
              Status: 'Completed',
    
              StatusBg: '#8BE78B',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1025,
          
              CustomerName: 'Michael',
              CustomerEmail: 'michael@gmail.com',
              ProjectName: 'Weekly WP Theme',
              Status: 'Cancel',
        
              StatusBg: 'red',
              Weeks: '34',
              Budget: '$16.5k',
              Location: 'USA',
            },
            {
              CustomerID: 1026,
              CustomerName: 'Nirav Joshi',
              CustomerEmail: 'nirav@gmail.com',
        
              ProjectName: 'Hosting Press HTML',
              Status: 'Active',
              StatusBg: '#8BE78B',
              Weeks: '40',
              Budget: '$2.4k',
              Location: 'India',
            }

        ]
        const pageSettings = { pageSize:20 };
        const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'};
        const toolbarOptions = ['Add', 'Edit', 'Delete','Search'];
  return (
<div className='Contacts'>
  <h3 className='py-2'>Contacts</h3>
 <GridComponent pageSettings={pageSettings} dataSource={data}  allowPaging={true} allowSorting={true} editSettings={editOptions} toolbar={toolbarOptions}
 height='600px'>
        <ColumnsDirective  >
        <ColumnDirective  type='checkbox' width="50px"/>
            <ColumnDirective field='CustomerName' headerText='CustomerName'/>
            <ColumnDirective field='ProjectName' headerText='ProjectName' allowEditing="true" editType="Textedit"/>
            <ColumnDirective field='Status' headerText='Status' allowAdding="true"/>
            <ColumnDirective field='Weeks' headerText='Weeks' />
            <ColumnDirective field='Budget' headerText='Budget' />
            <ColumnDirective field='Location' headerText='Location' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Toolbar,Edit,Search]}/>
    </GridComponent>
    </div>
  )
}
