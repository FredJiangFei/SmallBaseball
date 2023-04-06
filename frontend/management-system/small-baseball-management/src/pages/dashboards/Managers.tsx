import React, { useEffect, useState } from 'react';
import managerService from '../../services/managerService';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import styled from 'styled-components/macro';
import { spacing } from '@mui/system';
import { Manager } from '../../types/manager';
import { NavLink } from 'react-router-dom';

const MuiCard = styled(Card)(spacing);
const MuiCardContent = styled(CardContent)(spacing);
const CellButton = styled(Button)(() => ({
  padding: 5,
  minWidth: 0,
}));

function Managers() {
  const [rows, setRows] = useState<Manager[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const res: any = await managerService.getAll();
    res.data.forEach((item: any) => {
      item.id = item._id;
    })

    setRows(res.data);
  };

  const handleRenderActionCell = (params: GridRenderCellParams) => {
    return (
      <CellButton variant="text" onClick={() => handleDeleteClick(params)}>
        Delete
      </CellButton>
    );
  };

  const handleDeleteClick = async (params: GridRenderCellParams) => {
    await managerService.deleteManager(params.id);
    getAll();
  };

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 200,
      disableColumnMenu: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      disableColumnMenu: true,
      sortable: false,
      hideSortIcons: true,
      headerAlign: 'center',
      renderCell: handleRenderActionCell,
    },
  ];

  return (
    <>
      <React.Fragment>
        <Typography variant="h3" gutterBottom display="inline" mr={2}>
          Managers
        </Typography>
        <NavLink to="/managers/create">Create</NavLink>
        <MuiCard mb={6} mt={2} sx={{ width: '100%', height: '100%' }}>
          <MuiCardContent sx={{ width: '100%', height: 'calc(100% - 50px)' }}>
            <DataGrid rows={rows} columns={columns} />
          </MuiCardContent>
        </MuiCard>
      </React.Fragment>
    </>
  );
}

export default Managers;
