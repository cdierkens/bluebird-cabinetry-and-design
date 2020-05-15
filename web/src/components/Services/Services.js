import React from "react";
import {
  ConstructionIcon,
  DesignIcon,
  LayoutIcon,
  MaterialIcon,
  RemodelIcon,
  RenderingIcon,
} from "../../icons";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.ServicesContainer}>
      <Container className={styles.ServicesGrid}>
        <Grid>
          <div className={styles.FirstIconContainer}>
            <DesignIcon className="h-12 mb-2 text-blue-dark" />
            <span>
              Cabinetry Design <br />& Sales
            </span>
          </div>

          <div className={styles.IconContainer}>
            <RemodelIcon className="h-12 mb-2 text-blue-dark" />
            <span>Remodeling</span>
          </div>

          <div className={styles.IconContainer}>
            <ConstructionIcon className="h-12 mb-2 text-blue-dark" />
            <span>New Construction</span>
          </div>

          <div className={styles.IconContainer}>
            <RenderingIcon className="h-12 mb-2 text-blue-dark" />
            <span>Renderings</span>
          </div>

          <div className={styles.IconContainer}>
            <MaterialIcon className="h-12 mb-2 text-blue-dark" />
            <span>Material & Appliance Selections</span>
          </div>

          <div className={styles.IconContainer}>
            <LayoutIcon className="h-12 mb-2 text-blue-dark" />
            <span>
              Space Planning <br />& Layout
            </span>
          </div>
        </Grid>
      </Container>

      <Container className="text-center pb-8 pt-4">
        <Button variant="blue" to="/services">
          Services
        </Button>
      </Container>
    </div>
  );
};

export default Services;
