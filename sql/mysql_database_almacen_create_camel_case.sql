DROP DATABASE IF EXISTS `almacen`;
CREATE DATABASE IF NOT EXISTS `almacen`;
USE `almacen`;

CREATE TABLE IF NOT EXISTS `CentrosTrabajos` (
    `idCentroDeTrabajo`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idInterlocutorComercial`           BIGINT                  NULL DEFAULT NULL,
    `idCategoriaCentro`                 BIGINT                  NULL DEFAULT NULL,
    `costo`                             DECIMAL(18, 1)          NULL DEFAULT NULL,
    `idBodega`                          BIGINT                  NULL DEFAULT NULL,
    `idMetodoCosteo`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Conceptos` (
    `idConcepto`                        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionConcepto`               VARCHAR(255)            NULL DEFAULT NULL,
    `reposicion`                        BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `CondicionesPagos` (
    `idCondicionPago`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombreCondicion`                   VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(255)            NULL DEFAULT NULL,
    `deudor`                            BIT                     NULL DEFAULT NULL,
    `acreedor`                          BIT                     NULL DEFAULT NULL,
    `diiaFijo`                          INT                     NULL DEFAULT NULL,
    `mesesAdicionales`                  INT                     NULL DEFAULT NULL,
    `diasTolerancia`                    INT                     NULL DEFAULT NULL,
    `numeroPlazos`                      INT                     NULL DEFAULT NULL,
    `descuentoTotal`                    FLOAT                   NULL DEFAULT NULL,
    `interesCredito`                    FLOAT                   NULL DEFAULT NULL,
    `haberMaximo`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosMovimientos` (
    `idEstadoMovimiento`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionEstadoMovimiento`       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosRemisiones` (
    `idEstadoRemision`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionEstadoRemision`         VARCHAR(255)        NOT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosSaldos` (
    `idEstadoSaldo`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionEstadoSaldo`            VARCHAR(255)            NULL DEFAULT NULL,
    `codigoColor`                       VARCHAR(255)            NULL DEFAULT NULL,
    `estaEnReposicion`                  BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListasPrecios` (
    `idListaPrecio`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombreListaPrecios`                VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionListaPrecios`           VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `GrupoInterlocutores` (
    `idGrupoInterlocutor`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombreGrupo`                       VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(255)            NULL DEFAULT NULL,
    `cuentaContable`                    VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idListaPrecio`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListasPreciosMateriales` (
    `id`                                BIGINT              NOT NULL PRIMARY KEY,
    `idMateriales`                      BIGINT              NOT NULL,
    `idListasPrecios`                   BIGINT              NOT NULL
);

CREATE TABLE IF NOT EXISTS `PlanCompra` (
    `idPlanCompra`                      BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    BIGINT                  NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(100)        NOT NULL,
    `cantidad`                          DOUBLE              NOT NULL,
    `idGrupoProveedor`                  INT                     NULL DEFAULT NULL,
    `fechaExplosion`                    DATETIME                NULL DEFAULT NULL,
    `fechaCreacion`                     DATETIME                NULL DEFAULT NULL,
    `fechaModificacion`                 DATETIME                NULL DEFAULT NULL,
    `usuario`                           VARCHAR(100)            NULL DEFAULT NULL,
    `estado`                            VARCHAR(10)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Cotizacion` (
    `idCotizacion`                      INT                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cabecera`                          INT                     NULL DEFAULT NULL,
    `idPlanCompra`                      BIGINT                  NULL,
    `idProveedor`                       INT                 NOT NULL,
    `estado`                            VARCHAR(20)             NULL DEFAULT NULL,
    `codigoMaterial`                    BIGINT                  NULL DEFAULT NULL,
    `descripcionMaterial`               VARCHAR(256)            NULL DEFAULT NULL,
    `nombreProveedor`                   VARCHAR(256)            NULL DEFAULT NULL,
    `buzonProveedor`                    VARCHAR(256)            NULL DEFAULT NULL,
    `cantidadRequerida`                 DOUBLE              NOT NULL,
    `cantidadCotizada`                  DOUBLE              NOT NULL,
    `valorCotizado`                     DOUBLE                  NULL DEFAULT NULL,
    `descuento`                         DOUBLE                  NULL DEFAULT NULL,
    `fechaNecesaria`                    DATETIME                NULL DEFAULT NULL,
    `fechaEntrega`                      DATETIME            NOT NULL,
    `fechaCreacion`                     DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Sociedad` (
    `idSociedad`                        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoSociedad`                    VARCHAR(255)            NULL DEFAULT NULL,
    `nombreSociedad`                    VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionSociedad`               VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoInterlocutorComercial` (
    `idTipoInterlocutorComercial`       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `tipoInterlocutor`                  VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionTipoInterlocutor`       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutoresComerciales` (
    `idInterlocutorComercial`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoInterlocutor`                VARCHAR(255)            NULL DEFAULT NULL,
    `numeroIdentificacionFinanciera`    VARCHAR(255)            NULL DEFAULT NULL,
    `nombreInterlocutor`                VARCHAR(255)            NULL DEFAULT NULL,
    `telefono`                          VARCHAR(255)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fax`                               VARCHAR(255)            NULL DEFAULT NULL,
    `email`                             VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idGrupoInterlocutor`               BIGINT                  NULL DEFAULT NULL,
    `idTipoInterlocutor`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutorFinanzas` (
    `idInterlocutorFinanzas`            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `impuesto`                          BIT                     NULL DEFAULT NULL,
    `sujetoRetencion`                   BIT                     NULL DEFAULT NULL,
    `numeroCertificadoRetencion`        VARCHAR(255)            NULL DEFAULT NULL,
    `fechaVencimiento`                  TIMESTAMP               NULL DEFAULT NULL,
    `numeroAfiliacionSeguridad`         VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutoresCondicionPago` (
    `idInterlocutorCondicionPago`       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombreCondicion`                   VARCHAR(255)            NULL DEFAULT NULL,
    `interesMora`                       FLOAT                   NULL DEFAULT NULL,
    `descuentoTotal`                    FLOAT                   NULL DEFAULT NULL,
    `cupoCredito`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `numeroCuenta`                      VARCHAR(255)            NULL DEFAULT NULL,
    `sucursal`                          VARCHAR(255)            NULL DEFAULT NULL,
    `claveControl`                      VARCHAR(255)            NULL DEFAULT NULL,
    `entregaParcial`                    BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idListaPrecio`                     BIGINT                  NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL,
    `idCondicionPago`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoListaMaterial` (
    `idTipoListaMaterial`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombreTipoLista`                   VARCHAR(20)             NULL DEFAULT NULL,
    `descripcionLista`                  VARCHAR(200)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoUnidadMedida` (
    `idTipoUnidadMedida`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre`                            VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposAgentes` (
    `idTipoAgente`                      BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionTipoAgente`             VARCHAR(255)            NULL DEFAULT NULL,
    `tablaInformacion`                  VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Agentes` (
    `idAgente`                          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idTipoAgente`                      BIGINT                  NULL DEFAULT NULL,
    `idEntidad`                         INT                     NULL DEFAULT NULL,
    `idAlmacen`                         INT                     NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `idSociedad`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Bodegas` (
    `idBodega`                          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoBodega`                      VARCHAR(20)             NULL DEFAULT NULL,
    `descripcionBodega`                 VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `idAgente`                          BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Localizaciones` (
    `idLocalizacion`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idBodega`                          BIGINT                  NULL DEFAULT NULL,
    `nombreLocalizacion`                VARCHAR(255)            NULL DEFAULT NULL,
    `direccion`                         VARCHAR(255)            NULL DEFAULT NULL,
    `codigoPostal`                      VARCHAR(255)            NULL DEFAULT NULL,
    `poBox`                             VARCHAR(255)            NULL DEFAULT NULL,
    `ciudad`                            VARCHAR(255)            NULL DEFAULT NULL,
    `pais`                              VARCHAR(255)            NULL DEFAULT NULL,
    `region`                            VARCHAR(255)            NULL DEFAULT NULL,
    `telefono`                          VARCHAR(255)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fax`                               VARCHAR(255)            NULL DEFAULT NULL,
    `email`                             VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Remisiones` (
    `idRemision`                        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numeroGuia`                        VARCHAR(255)            NULL DEFAULT NULL,
    `fechaCreacion`                     TIMESTAMP               NULL DEFAULT NULL,
    `fechaRecepcion`                    TIMESTAMP               NULL DEFAULT NULL,
    `concecutivoInterno`                INT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idAgenteOrigen`                    BIGINT                  NULL DEFAULT NULL,
    `idAgenteDestino`                   BIGINT                  NULL DEFAULT NULL,
    `idEstadoRemision`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposMateriales` (
    `idTipoMaterial`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `tipoMaterial`                      VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionTipoMaterial`           VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Materiales` (
    `idMaterial`                        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `referencia`                        VARCHAR(255)            NULL DEFAULT NULL,
    `generaRecibo`                      BIT                     NULL DEFAULT NULL,
    `ventaApartado`                     BIT                     NULL DEFAULT NULL,
    `permiteDevolucion`                 BIT                     NULL DEFAULT NULL,
    `simbolo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `valorUnitario`                     FLOAT                   NULL DEFAULT NULL,
    `costo`                             FLOAT                   NULL DEFAULT NULL,
    `consumible`                        BIT                     NULL DEFAULT NULL,
    `producible`                        BIT                     NULL DEFAULT NULL,
    `comprable`                         BIT                     NULL DEFAULT NULL,
    `vendible`                          BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTiposMateriales`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesCostosPromedios` (
    `idMaterialCostoPromedio`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `costoPromedio`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `fechaInicial`                      TIMESTAMP               NULL DEFAULT NULL,
    `fechaFinal`                        TIMESTAMP               NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesDescripciones` (
    `idMaterialDescripcion`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `cultura`                           VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionMaterial`               VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmCodigoEquivalente` (
    `idMmCodigoEquivalente`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `tipoCodigoEquivalente`             VARCHAR(255)            NULL DEFAULT NULL,
    `valorCodigoEquivalente`            VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmTmcCaracteristica` (
    `idMmTmcCaracteristica`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idTipoMaterialCaracteristica`      BIGINT                  NULL DEFAULT NULL,
    `tipoMaterial`                      VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionTipoMaterialCaracteristica`     VARCHAR(255)    NULL DEFAULT NULL,
    `tipoDato`                          INT                     NULL DEFAULT NULL,
    `reglaValidacion`                   VARCHAR(255)            NULL DEFAULT NULL,
    `visibleDetalle`                    BIT                     NULL DEFAULT NULL,
    `ordenDetall`                       INT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoMaterial`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesCaracteristicas` (
    `idMaterialCaracteristica`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `valorCaracteristica`               VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoMaterialCaracteristica`      BIGINT                  NULL DEFAULT NULL,
    `idTipoMaterial`                    BIGINT                  NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmTmcdDescripciones` (
    `idMmTmcdDescripciones`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idTipoMaterialCaracteristica`      BIGINT                  NULL DEFAULT NULL,
    `cultura`                           VARCHAR(255)            NULL DEFAULT NULL,
    `descripcionMaterial`               VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposMovimientos` (
    `idTipoMovimiento`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionTipoMovimiento`         VARCHAR(255)            NULL DEFAULT NULL,
    `signo`                             BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentos` (
    `idTipoDocumento`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcionTipoDocumento`          VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoMovimiento`                  BIGINT                  NULL DEFAULT NULL,
    `idEstadoRemision`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Consecutivos` (
    `idConsecutivo`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `resolucion`                        VARCHAR(255)            NULL DEFAULT NULL,
    `valorInicial`                      INT                     NULL DEFAULT NULL,
    `valorFinal`                        INT                     NULL DEFAULT NULL,
    `incremento`                        INT                     NULL DEFAULT NULL,
    `valorActual`                       INT                     NULL DEFAULT NULL,
    `caracterLlenado`                   VARCHAR(255)            NULL DEFAULT NULL,
    `fechaInicial`                      TIMESTAMP               NULL DEFAULT NULL,
    `fechaFinal`                        TIMESTAMP               NULL DEFAULT NULL,
    `sufijo`                            VARCHAR(255)            NULL DEFAULT NULL,
    `prefijo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `habilitado`                        BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Movimientos` (
    `idMovimiento`                      BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idRemision`                        BIGINT                  NULL DEFAULT NULL,
    `numeroDocumento`                   VARCHAR(255)            NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL,
    `idTipoMovimiento`                  BIGINT                  NULL DEFAULT NULL,
    `idEstadoMovimiento`                BIGINT                  NULL DEFAULT NULL,
    `idConcepto`                        BIGINT                  NULL DEFAULT NULL,
    `fechaCreacion`                     TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `fechaAnulacion`                    TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01',
    `idBodega`                          BIGINT                  NULL DEFAULT NULL,
    `sobreCosto`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `sobreCostoAplicadoProducto`        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01'
);

CREATE TABLE IF NOT EXISTS `MovimientosDetalles` (
    `idMovimientoDetalle`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numeroDocumento`                   VARCHAR(255)            NULL DEFAULT NULL,
    `codigoProducto`                    VARCHAR(255)            NULL DEFAULT NULL,
    `valorUnitario`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `sobreCosto`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `cantidad`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `idEstadoSaldo`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesCompras` (
    `idRemisionCompra`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numeroRemisionCompra`              VARCHAR(255)            NULL DEFAULT NULL,
    `fechaContabilizacion`              TIMESTAMP               NULL DEFAULT NULL,
    `fechaValidez`                      TIMESTAMP               NULL DEFAULT NULL,
    `fechaDocumento`                    TIMESTAMP               NULL DEFAULT NULL,
    `fechaNecesaria`                    TIMESTAMP               NULL DEFAULT NULL,
    `numeroReferencia`                  VARCHAR(255)            NULL DEFAULT NULL,
    `totalBruto`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentajeDescuento`               DOUBLE                  NULL DEFAULT NULL,
    `porcentajeImpuesto`                DOUBLE                  NULL DEFAULT NULL,
    `valorTotal`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `comentarios`                       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL,
    `idRemision`                        BIGINT                  NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesComprasMateriales` (
    `idRemisionCompraMaterial`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numeroRemisionCompra`              VARCHAR(255)            NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `fechaNecesaria`                    TIMESTAMP               NULL DEFAULT NULL,
    `fechaSolicitud`                    TIMESTAMP               NULL DEFAULT NULL,
    `cantidad`                          DOUBLE                  NULL DEFAULT NULL,
    `valorUnitario`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentajeDescuento`               FLOAT                   NULL DEFAULT NULL,
    `costoPromedio`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idRemisionCompra`                  BIGINT                  NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesVenta` (
    `numeroDocumento`                   VARCHAR(255)        NOT NULL PRIMARY KEY,
    `fechaContabilizacion`              TIMESTAMP               NULL DEFAULT NULL,
    `fechaValidez`                      TIMESTAMP               NULL DEFAULT NULL,
    `fechaDocumento`                    TIMESTAMP               NULL DEFAULT NULL,
    `fechaNecesaria`                    TIMESTAMP               NULL DEFAULT NULL,
    `numeroReferencia`                  VARCHAR(255)            NULL DEFAULT NULL,
    `totalBruto`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentajeDescuento`               DOUBLE                  NULL DEFAULT NULL,
    `porcentajeImpuesto`                DOUBLE                  NULL DEFAULT NULL,
    `valorTotal`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `comentarios`                       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL,
    `idRemision`                        BIGINT                  NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL,
    `listaPrecio`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentosConceptos` (
    `idTipoDocumentoConcepto`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL,
    `idConcepto`                        BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentosTiposAgentes` (
    `idTipoDocumentoTipoAgente`         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoDocumento`                   BIGINT                  NULL DEFAULT NULL,
    `idTipoAgente`                      BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `UnidadMedida` (
    `idUnidadMedida`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre`                            VARCHAR(255)            NULL DEFAULT NULL,
    `simbolo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `factor`                            FLOAT                   NULL DEFAULT NULL,
    `precision`                         FLOAT                   NULL DEFAULT NULL,
    `conversion`                        FLOAT                   NULL DEFAULT NULL,
    `decimales`                         INT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idTipoUnidadMedida`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListaDeMateriales` (
    `idListaMaterial`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idUnidadMedida`                    BIGINT                  NULL DEFAULT NULL,
    `idTipoListaMaterial`               BIGINT                  NULL DEFAULT NULL,
    `idBodega`                          BIGINT                  NULL DEFAULT NULL,
    `fechaInicio`                       DATETIME                NULL DEFAULT NULL,
    `fechaFin`                          DATETIME                NULL DEFAULT NULL,
    `cantidad`                          INT                     NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `codigoComponente`                  VARCHAR(255)            NULL DEFAULT NULL,
    `idListaPrecio`                     BIGINT                  NULL DEFAULT NULL,
    `precioUnitario`                    DECIMAL(18, 1)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(100)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesDatosCompra` (
    `idMaterialDatoCompra`              BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoMaterialCompra`              VARCHAR(255)            NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `automaticPurchase`                 BIT                     NULL DEFAULT NULL,
    `gestionLotes`                      BIT                     NULL DEFAULT NULL,
    `toleranciaEntregaInferior`         DECIMAL(10, 2)          NULL DEFAULT NULL,
    `toleranciaEntregaSuperior`         DECIMAL(10, 2)          NULL DEFAULT NULL,
    `diasEntrega`                       INT                     NULL DEFAULT NULL,
    `requiereInspeccion`                BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `idUnidadMedidaBase`                BIGINT                  NULL DEFAULT NULL,
    `idUnidadMedidaCompra`              BIGINT                  NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL,
    `idInterlocutor`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `OrdenProduccion` (
    `numeroOrden`                       VARCHAR(20)         NOT NULL PRIMARY KEY,
    `referencia`                        VARCHAR(20)             NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `idEstadoProduccion`                BIGINT                  NULL DEFAULT NULL,
    `idRutaOrdenTrabajo`                BIGINT                  NULL DEFAULT NULL,
    `idListaMateriales`                 BIGINT                  NULL DEFAULT NULL,
    `idUnidadMedida`                    BIGINT                  NULL DEFAULT NULL,
    `idCentroTrabajo`                   BIGINT                  NULL DEFAULT NULL,
    `fechaEstimada`                     DATETIME                NULL DEFAULT NULL,
    `fechaInicioEstimada`               DATETIME                NULL DEFAULT NULL,
    `fechaFinalizacion`                 DATETIME                NULL DEFAULT NULL,
    `cantidadPlanificada`               DECIMAL(18, 1)          NULL DEFAULT NULL,
    `origenOrden`                       VARCHAR(20)             NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `fecha`                             DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Componentes` (
    `idComponente`                      BIGINT              NOT NULL PRIMARY KEY,
    `numeroOrden`                       VARCHAR(20)             NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `idUnidadMedida`                    BIGINT                  NULL DEFAULT NULL,
    `idAlmacen`                         BIGINT                  NULL DEFAULT NULL,
    `cantidadBase`                      DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidadRequerida`                 DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidadAdicional`                 DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidadConsumida`                 DECIMAL(18, 1)          NULL DEFAULT NULL,
    `fechaEstimada`                     DATETIME                NULL DEFAULT NULL,
    `fechaEfectiva`                     DATETIME                NULL DEFAULT NULL,
    `fechaInicio`                       DATETIME                NULL DEFAULT NULL,
    `fechaFinal`                        DATETIME                NULL DEFAULT NULL,
    `idEstadoComponente`                BIGINT                  NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `fecha`                             DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `OrdenDeTrabajo` (
    `idOrdenTrabajo`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idOperacion`                       BIGINT                  NULL DEFAULT NULL,
    `idCentroTrabajo`                   BIGINT                  NULL DEFAULT NULL,
    `idEstadoOT`                        BIGINT                  NULL DEFAULT NULL,
    `numeroOrden`                       VARCHAR(20)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesVentaMateriales` (
    `idRemisionVentaMaterial`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numeroDocumento`                   VARCHAR(255)            NULL DEFAULT NULL,
    `codigoMaterial`                    VARCHAR(255)            NULL DEFAULT NULL,
    `fechaNecesaria`                    TIMESTAMP               NULL DEFAULT NULL,
    `fechaSolicitud`                    TIMESTAMP               NULL DEFAULT NULL,
    `cantidad`                          DOUBLE                  NULL DEFAULT NULL,
    `valorUnitario`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentajeDescuento`               FLOAT                   NULL DEFAULT NULL,
    `costoPromedio`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `idRemisionCompra`                  BIGINT                  NULL DEFAULT NULL,
    `idMaterial`                        BIGINT                  NULL DEFAULT NULL,
    `idUnidadMedida`                    BIGINT                  NULL DEFAULT NULL,
    `cantidadUnidadMedida`              DECIMAL(18, 1)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Zonas` (
    `codigoZona`                        VARCHAR(20)         NOT NULL PRIMARY KEY,
    `idBodega`                          BIGINT                  NULL DEFAULT NULL,
    `descripcionZona`                   VARCHAR(255)            NULL DEFAULT NULL,
    `transitoDirecto`                   BIT                     NULL DEFAULT NULL,
    `picking`                           BIT                     NULL DEFAULT NULL,
    `ubicacion`                         BIT                     NULL DEFAULT NULL,
    `despacho`                          BIT                     NULL DEFAULT NULL,
    `recepcion`                         BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `Ubicaciones` (
    `idUbicacion`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigoUbicacion`                   VARCHAR(20)         NOT NULL,
    `codigoZona`                        VARCHAR(20)             NULL DEFAULT NULL,
    `descripcionUbicacion`              VARCHAR(255)            NULL DEFAULT NULL,
    `dedicado`                          BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `Saldos` (
    `idSaldo`                           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idEstadoSaldo`                     BIGINT                  NULL DEFAULT NULL,
    `idUbicacion`                       BIGINT                  NULL DEFAULT NULL,
    `codigoProducto`                    VARCHAR(255)            NULL DEFAULT NULL,
    `cantidad`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `GrupoInterlocutores`
    ADD CONSTRAINT `fkGrupoInterlocutoresListaPrecioId`
        FOREIGN KEY (`idListaPrecio`)
        REFERENCES `ListasPrecios` (`idListaPrecio`);

ALTER TABLE `Cotizacion`
    ADD CONSTRAINT `cotizacionPlanCompraIdFk`
        FOREIGN KEY (`idPlanCompra`)
        REFERENCES `PlanCompra` (`idPlanCompra`);

CREATE OR REPLACE INDEX `cotizacionIdPlanCompraIndex`
        ON `Cotizacion` (`idPlanCompra`);

CREATE OR REPLACE INDEX `cotizacionMaterialesIdFk`
        ON `Cotizacion` (`codigoMaterial`);

CREATE OR REPLACE INDEX `planCompraMaterialIndex`
        ON `PlanCompra` (`codigoMaterial`);

ALTER TABLE `InterlocutoresComerciales`
    ADD CONSTRAINT `fkInterlocutoresComercialesGrupoInterlocutorId`
        FOREIGN KEY (`idGrupoInterlocutor`)
        REFERENCES `GrupoInterlocutores` (`idGrupoInterlocutor`),
    ADD CONSTRAINT `fkInterlocutoresComercialesTipointerlocutorId`
        FOREIGN KEY (`idTipoInterlocutor`)
        REFERENCES `TipoInterlocutorComercial` (`idTipoInterlocutorComercial`);

ALTER TABLE `InterlocutorFinanzas`
    ADD CONSTRAINT `fkInterlocutoresComercialesFinanzasInterlocutorId`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`);

ALTER TABLE `InterlocutoresCondicionPago`
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoCondicionPagoId`
        FOREIGN KEY (`idCondicionPago`)
        REFERENCES `CondicionesPagos` (`idCondicionPago`),
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoListaPrecioId`
        FOREIGN KEY (`idListaPrecio`)
        REFERENCES `ListasPrecios` (`idListaPrecio`),
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoInterlocutorId`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`);

ALTER TABLE `Agentes`
    ADD CONSTRAINT `agentesSociedadIdFk`
        FOREIGN KEY (`idSociedad`)
        REFERENCES `Sociedad` (`idSociedad`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `agentesTiposAgentesIdFk`
        FOREIGN KEY (`idTipoAgente`)
        REFERENCES `TiposAgentes` (`idTipoAgente`)
        ON UPDATE NO ACTION;

ALTER TABLE `Bodegas`
    ADD CONSTRAINT `bodegasCodigoBodegaUindex`
        UNIQUE (`codigoBodega`),
    ADD CONSTRAINT `bodegasAgentesIdFk`
        FOREIGN KEY (`idAgente`)
        REFERENCES `Agentes` (`idAgente`)
        ON UPDATE NO ACTION;

ALTER TABLE `Localizaciones`
    ADD CONSTRAINT `fkLocalizacionesInterlocutorId`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`),
    ADD CONSTRAINT `localizacionesBodegasIdFk`
        FOREIGN KEY (`idBodega`)
        REFERENCES `Bodegas` (`idBodega`)
        ON UPDATE NO ACTION;

ALTER TABLE `Remisiones`
    ADD CONSTRAINT `fkRemisionesAgentedestinoId`
        FOREIGN KEY (`idAgenteDestino`)
        REFERENCES `Agentes` (`idAgente`),
    ADD CONSTRAINT `fkRemisionesAgenteorigenId`
        FOREIGN KEY (`idAgenteOrigen`)
        REFERENCES `Agentes` (`idAgente`),
    ADD CONSTRAINT `fkRemisionesEstadoRemisionId`
        FOREIGN KEY (`idEstadoRemision`)
        REFERENCES `EstadosRemisiones` (`idEstadoRemision`);

ALTER TABLE `Materiales`
    ADD CONSTRAINT `materialesCodigoProductoUindex`
        UNIQUE (`codigoMaterial`),
    ADD CONSTRAINT `materialesTiposMaterialesIdTipoMaterialFk`
        FOREIGN KEY (`idTiposMateriales`)
        REFERENCES `TiposMateriales` (`idTipoMaterial`)
        ON UPDATE NO ACTION;

ALTER TABLE `MaterialesCostosPromedios`
    ADD CONSTRAINT `materialesCostosPromediosMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION;

ALTER TABLE `MaterialesDescripciones`
    ADD CONSTRAINT `materialesDescripcionesMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`);

CREATE OR REPLACE INDEX `materialesDescripcionesCodigoMaterialIndex`
        ON `MaterialesDescripciones` (`codigoMaterial`);

ALTER TABLE `MmCodigoEquivalente`
    ADD CONSTRAINT `mmCodigoEquivalenteMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `mmCodigoEquivalenteCodigoMaterialIndex`
        ON `MmCodigoEquivalente` (`codigoMaterial`);

ALTER TABLE `MmTmcCaracteristica`
    ADD CONSTRAINT `fkTiposMaterialesCaracteristicasTipoMaterialId`
        FOREIGN KEY (`idTipoMaterial`)
        REFERENCES `TiposMateriales` (`idTipoMaterial`);

ALTER TABLE `MaterialesCaracteristicas`
    ADD CONSTRAINT `materialesCaracteristicasMaterialesIdMaterialFk`
        FOREIGN KEY (`idMaterial`)
        REFERENCES `Materiales` (`idMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materialesCaracteristicasMmTmcCaracteristicaFk`
        FOREIGN KEY (`idTipoMaterialCaracteristica`)
        REFERENCES `MmTmcCaracteristica` (`idMmTmcCaracteristica`)
        ON UPDATE NO ACTION;

ALTER TABLE `MaterialesCaracteristicas`
    ADD CONSTRAINT `materialesCaracteristicasTiposMaterialesIdTipoMaterialFk`
        FOREIGN KEY (`idTipoMaterial`)
        REFERENCES `TiposMateriales` (`idTipoMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materialesCaracteristicasFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `materialesCaracteristicasIdTipoMaterialCaracteristicaIndex`
        ON `MaterialesCaracteristicas` (`idTipoMaterialCaracteristica`);

CREATE OR REPLACE INDEX `materialesCaracteristicasCodigoMaterialIndex`
        ON `MaterialesCaracteristicas` (`codigoMaterial`);

CREATE OR REPLACE INDEX `mmTmcCaracteristicaIdTipoMaterialCaracteristicaIndex`
        ON `MmTmcCaracteristica` (`idTipoMaterialCaracteristica`);

ALTER TABLE `MmTmcdDescripciones`
    ADD CONSTRAINT `mmTmcdTmcFk`
        FOREIGN KEY (`idTipoMaterialCaracteristica`)
        REFERENCES `MmTmcCaracteristica` (`idMmTmcCaracteristica`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `mmTmcdDescripcionesTipoMaterialCaracteristicaIndex`
        ON `MmTmcdDescripciones` (`idTipoMaterialCaracteristica`);

ALTER TABLE `TiposDocumentos`
    ADD CONSTRAINT `fkTiposDocumentosEstadoRemisionId`
        FOREIGN KEY (`idEstadoRemision`)
        REFERENCES `EstadosRemisiones` (`idEstadoRemision`),
    ADD CONSTRAINT `fkTiposDocumentosTipoMovimientoId1`
        FOREIGN KEY (`idTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`idTipoMovimiento`),
    ADD CONSTRAINT `fkTiposDocumentosTipomovimientoId2`
        FOREIGN KEY (`idTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`idTipoMovimiento`);

ALTER TABLE `Consecutivos`
    ADD CONSTRAINT `consecutivosTiposDocumentosIdFk`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`)
        ON UPDATE NO ACTION;

ALTER TABLE `Movimientos`
    ADD CONSTRAINT `movimientosNumeroDocumentoUindex`
        UNIQUE (`numeroDocumento`),
    ADD CONSTRAINT `movimientosBodegasIdFk`
        FOREIGN KEY (`idBodega`)
        REFERENCES `Bodegas` (`idBodega`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `movimientosConceptosIdFk`
        FOREIGN KEY (`idConcepto`)
        REFERENCES `Conceptos` (`idConcepto`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `movimientosEstadosMovimientosIdFk`
        FOREIGN KEY (`idEstadoMovimiento`)
        REFERENCES `EstadosMovimientos` (`idEstadoMovimiento`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientosRemisionesIdFk`
        FOREIGN KEY (`idRemision`)
        REFERENCES `Remisiones` (`idRemision`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientosTiposDocumentosIdFk`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientosTiposMovimientosIdFk`
        FOREIGN KEY (`idTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`idTipoMovimiento`)
        ON UPDATE NO ACTION;

ALTER TABLE `MovimientosDetalles`
    ADD CONSTRAINT `movimientosDetallesEstadosSaldosIdFk`
        FOREIGN KEY (`idEstadoSaldo`)
        REFERENCES `EstadosSaldos` (`idEstadoSaldo`),
    ADD CONSTRAINT `movimientosDetallesMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoProducto`)
        REFERENCES `Materiales` (`codigoMaterial`),
    ADD CONSTRAINT `movimientosDetallesMovimientosNumeroDocumentoFk`
        FOREIGN KEY (`numeroDocumento`)
        REFERENCES `Movimientos` (`numeroDocumento`);

ALTER TABLE `RemisionesCompras`
    ADD CONSTRAINT `fkRemisionesComprasTipoDocumentoId`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`),
    ADD CONSTRAINT `fkRemisionesComprasInterlocutorId`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`),
    ADD CONSTRAINT `fkRemisionesComprasRemisionId`
        FOREIGN KEY (`idRemision`)
        REFERENCES `Remisiones` (`idRemision`);

ALTER TABLE `RemisionesComprasMateriales`
    ADD CONSTRAINT `fkRemisionesComprasMaterialesMaterialId`
        FOREIGN KEY (`idMaterial`)
        REFERENCES `Materiales` (`idMaterial`),
    ADD CONSTRAINT `fkRemisionesComprasMaterialesRemisionCompraId`
        FOREIGN KEY (`idRemisionCompra`)
        REFERENCES `RemisionesCompras` (`idRemisionCompra`);

ALTER TABLE `RemisionesVenta`
    ADD CONSTRAINT `remisionesVentaListasPreciosIdListaPrecioFk`
        FOREIGN KEY (`listaPrecio`)
        REFERENCES `ListasPrecios` (`idListaPrecio`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRemisionesVentaTipoDocumentoId`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`),
    ADD CONSTRAINT `fkRemisionesVentaInterlocutorId`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`),
    ADD CONSTRAINT `fkRemisionesVentaRemisionId`
        FOREIGN KEY (`idRemision`)
        REFERENCES `Remisiones` (`idRemision`);

ALTER TABLE `TiposDocumentosConceptos`
    ADD CONSTRAINT `tiposDocumentosConceptosConceptosIdFk`
        FOREIGN KEY (`idConcepto`)
        REFERENCES `Conceptos` (`idConcepto`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `tiposDocumentosConceptosTiposDocumentosIdFk`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`)
        ON UPDATE NO ACTION;

ALTER TABLE `TiposDocumentosTiposAgentes`
    ADD CONSTRAINT `tiposDocumentosTiposAgentesTiposAgentesIdFk`
        FOREIGN KEY (`idTipoAgente`)
        REFERENCES `TiposAgentes` (`idTipoAgente`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `tiposDocumentosTiposAgentesTiposDocumentosIdFk`
        FOREIGN KEY (`idTipoDocumento`)
        REFERENCES `TiposDocumentos` (`idTipoDocumento`)
        ON UPDATE NO ACTION;

ALTER TABLE `UnidadMedida`
    ADD CONSTRAINT `fkUnidadMedidaTipoUnidadMedidaId`
        FOREIGN KEY (`idTipoUnidadMedida`)
        REFERENCES `TipoUnidadMedida` (`idTipoUnidadMedida`);

ALTER TABLE `ListaDeMateriales`
    ADD CONSTRAINT `listaDeMaterialesPk`
        UNIQUE (`idListaMaterial`),
    ADD CONSTRAINT `listaDeMaterialesBodegasIdBodegaFk`
        FOREIGN KEY (`idBodega`)
        REFERENCES `Bodegas` (`idBodega`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `listaDeMaterialesListasPreciosIdListaPrecioFk`
        FOREIGN KEY (`idListaPrecio`)
        REFERENCES `ListasPrecios` (`idListaPrecio`),
    ADD CONSTRAINT `listaDeMaterialesMaterialesCodigoMaterialFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `listaDeMaterialesMaterialesCodigoMaterialFk2`
        FOREIGN KEY (`codigoComponente`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `listaDeMaterialesIdTipoListaMaterialFk`
        FOREIGN KEY (`idTipoListaMaterial`)
        REFERENCES `TipoListaMaterial` (`idTipoListaMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `listaDeMaterialesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`idUnidadMedida`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION;

ALTER TABLE `MaterialesDatosCompra`
    ADD CONSTRAINT `materialesDatosCompraInterlocutoresComercialesFk`
        FOREIGN KEY (`idInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`idInterlocutorComercial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materialesDatosCompraUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`idUnidadMedidaBase`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materialesDatosCompraUnidadMedidaIdUnidadMedidaFk2`
        FOREIGN KEY (`idUnidadMedidaCompra`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materialesDatosCompraMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `materialesDatosCompraCodigoMaterialIndex`
        ON `MaterialesDatosCompra` (`codigoMaterial`);

ALTER TABLE `OrdenProduccion`
    ADD CONSTRAINT `ordenProduccionListaDeMaterialesIdListaMaterialFk`
        FOREIGN KEY (`idListaMateriales`)
        REFERENCES `ListaDeMateriales` (`idListaMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `ordenProduccionMaterialesCodigoMaterialFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `ordenProduccionUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`idUnidadMedida`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION;

ALTER TABLE `Componentes`
    ADD CONSTRAINT `componentesMaterialesCodigoMaterialFk`
        FOREIGN KEY (`codigoMaterial`)
        REFERENCES `Materiales` (`codigoMaterial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `componentesOrdenProduccionNumeroOrdenFk`
        FOREIGN KEY (`numeroOrden`)
        REFERENCES `OrdenProduccion` (`numeroOrden`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `componentesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`idUnidadMedida`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION;

ALTER TABLE `OrdenDeTrabajo`
    ADD CONSTRAINT `ordenDeTrabajoCentrosTrabajosIdCentroDeTrabajoFk`
        FOREIGN KEY (`idCentroTrabajo`)
        REFERENCES `CentrosTrabajos` (`idCentroDeTrabajo`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `ordenDeTrabajoOrdenProduccionNumeroOrdenFk`
        FOREIGN KEY (`numeroOrden`)
        REFERENCES `OrdenProduccion` (`numeroOrden`)
        ON UPDATE NO ACTION;

ALTER TABLE `RemisionesVentaMateriales`
    ADD CONSTRAINT `remisionesVentaMaterialesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`idUnidadMedida`)
        REFERENCES `UnidadMedida` (`idUnidadMedida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRemisionesVentaMaterialesMaterialId`
        FOREIGN KEY (`idMaterial`)
        REFERENCES `Materiales` (`idMaterial`),
    ADD CONSTRAINT `fkRemisionesVentaMaterialesRemisionCompraId`
        FOREIGN KEY (`numeroDocumento`)
        REFERENCES `RemisionesVenta` (`numeroDocumento`);

ALTER TABLE `Zonas`
    ADD CONSTRAINT `izonasCodigoZonaUindex`
        UNIQUE (`codigoZona`),
    ADD CONSTRAINT `zonasBodegasIdFk`
        FOREIGN KEY (`idBodega`)
        REFERENCES `Bodegas` (`idBodega`)
        ON UPDATE NO ACTION;

ALTER TABLE `Ubicaciones`
    ADD CONSTRAINT `ubicacionesCodigoUbicacionUindex`
        UNIQUE (`codigoUbicacion`),
    ADD CONSTRAINT `ubicacionesZonasCodigoZonaFk`
        FOREIGN KEY (`codigoZona`)
        REFERENCES `Zonas` (`codigoZona`)
        ON UPDATE NO ACTION;

ALTER TABLE `Saldos`
    ADD CONSTRAINT `saldosEstadosSaldosIdFk`
        FOREIGN KEY (`idEstadoSaldo`)
        REFERENCES `EstadosSaldos` (`idEstadoSaldo`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `saldosMaterialesCodigoProductoFk`
        FOREIGN KEY (`codigoProducto`)
        REFERENCES `Materiales` (`codigoMaterial`),
    ADD CONSTRAINT `saldosUbicacionesIdFk`
        FOREIGN KEY (`idUbicacion`)
        REFERENCES `Ubicaciones` (`idUbicacion`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;

CREATE OR REPLACE INDEX `saldosCodigoProductoIndex`
        ON `Saldos` (`codigoProducto`);
