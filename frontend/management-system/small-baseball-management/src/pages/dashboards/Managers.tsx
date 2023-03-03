import React, { useEffect, useState } from 'react';
import managerService from '../../services/managerService';
import {
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  gridClasses,
} from '@mui/x-data-grid';
import styled from 'styled-components/macro';
import { spacing } from '@mui/system';
import { Manager } from '../../types/manager';

const MuiCard = styled(Card)(spacing);
const MuiCardContent = styled(CardContent)(spacing);
const CellButton = styled(Button)(() => ({
  padding: 5,
  minWidth: 0,
}));

function Managers() {
  const [managers, setManagers] = useState([]);
  const [rows, setRows] = useState<Manager[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [isShowSkip, setIsShowSkip] = useState(false);
  const [isShowDisable, setIsShowDisable] = useState(false);
  const [complaint, setComplaint] = useState<any>();

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const res: any = await managerService.getAll();
    setRows(res);
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
  ];

  return (
    <>
      <React.Fragment>
        <Typography variant="h3" gutterBottom display="inline">
          Managers
        </Typography>
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
