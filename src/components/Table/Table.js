import "./Table.css";
import { PiArrowsDownUp } from "react-icons/pi";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";

const Table = ({ products, deleteProduct }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDeleteWindow = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  const handleDelete = () => {
    deleteProduct(selectedProduct.id);
    handleClose();
  };

  return (
    <div className="Table-main">
      <table>
        <thead>
          <tr>
            <th>
              ID <PiArrowsDownUp />
            </th>
            <th>
              Category
              <PiArrowsDownUp />
            </th>
            <th>
              Name
              <PiArrowsDownUp />
            </th>
            <th>
              Quantity
              <PiArrowsDownUp />
            </th>
            <th>
              Price (₴)
              <PiArrowsDownUp />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                {
                  <MdModeEdit
                    className="Table-icon"
                    style={{ paddingRight: "9px" }}
                  />
                }
                {
                  <MdDelete
                    className="Table-icon"
                    onClick={() => handleOpenDeleteWindow(product)}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this product?
          </Typography>
          <Button className="Modal-btn-close" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="Modal-btn-delete" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Table;
