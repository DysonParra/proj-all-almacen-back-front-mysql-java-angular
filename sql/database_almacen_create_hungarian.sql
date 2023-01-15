DROP DATABASE IF EXISTS almacen;
CREATE DATABASE IF NOT EXISTS almacen;
USE almacen;

CREATE TABLE IF NOT EXISTS `CentrosTrabajos` (
    `intIdCentroDeTrabajo`              BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdInterlocutorComercial`        BIGINT                  NULL DEFAULT NULL,
    `intIdCategoriaCentro`              BIGINT                  NULL DEFAULT NULL,
    `decCosto`                          DECIMAL(18, 1)          NULL DEFAULT NULL,
    `intIdBodega`                       BIGINT                  NULL DEFAULT NULL,
    `intIdMetodoCosteo`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Conceptos` (
    `intIdConcepto`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionConcepto`            VARCHAR(255)            NULL DEFAULT NULL,
    `bitReposicion`                     BIT                     NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `CondicionesPagos` (
    `intIdCondicionPago`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombreCondicion`                VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcion`                    VARCHAR(255)            NULL DEFAULT NULL,
    `bitDeudor`                         BIT                     NULL DEFAULT NULL,
    `bitAcreedor`                       BIT                     NULL DEFAULT NULL,
    `intDiiaFijo`                       INT                     NULL DEFAULT NULL,
    `intMesesAdicionales`               INT                     NULL DEFAULT NULL,
    `intDiasTolerancia`                 INT                     NULL DEFAULT NULL,
    `intNumeroPlazos`                   INT                     NULL DEFAULT NULL,
    `fltDescuentoTotal`                 FLOAT                   NULL DEFAULT NULL,
    `fltInteresCredito`                 FLOAT                   NULL DEFAULT NULL,
    `decHaberMaximo`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosMovimientos` (
    `intIdEstadoMovimiento`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionEstadoMovimiento`    VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosRemisiones` (
    `intIdEstadoRemision`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionEstadoRemision`      VARCHAR(255)        NOT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `EstadosSaldos` (
    `intIdEstadoSaldo`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionEstadoSaldo`         VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoColor`                    VARCHAR(255)            NULL DEFAULT NULL,
    `bitEstaEnReposicion`               BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListasPrecios` (
    `intIdListaPrecio`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombreListaPrecios`             VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionListaPrecios`        VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `GrupoInterlocutores` (
    `intIdGrupoInterlocutor`            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombreGrupo`                    VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcion`                    VARCHAR(255)            NULL DEFAULT NULL,
    `strCuentaContable`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdListaPrecio`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListasPreciosMateriales` (
    `intId`                             BIGINT              NOT NULL PRIMARY KEY,
    `intIdMateriales`                   BIGINT              NOT NULL,
    `intIdListasPrecios`                BIGINT              NOT NULL
);

CREATE TABLE IF NOT EXISTS `PlanCompra` (
    `intIdPlanCompra`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intCodigoMaterial`                 BIGINT                  NULL DEFAULT NULL,
    `strDescripcion`                    VARCHAR(100)        NOT NULL,
    `dblCantidad`                       DOUBLE              NOT NULL,
    `intIdGrupoProveedor`               INT                     NULL DEFAULT NULL,
    `dtFechaExplosion`                  DATETIME                NULL DEFAULT NULL,
    `dtFechaCreacion`                   DATETIME                NULL DEFAULT NULL,
    `dtFechaModificacion`               DATETIME                NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(100)            NULL DEFAULT NULL,
    `strEstado`                         VARCHAR(10)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Cotizacion` (
    `intIdCotizacion`                   INT                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intCabecera`                       INT                     NULL DEFAULT NULL,
    `intIdPlanCompra`                   BIGINT                  NULL,
    `intIdProveedor`                    INT                 NOT NULL,
    `strEstado`                         VARCHAR(20)             NULL DEFAULT NULL,
    `intCodigoMaterial`                 BIGINT                  NULL DEFAULT NULL,
    `strDescripcionMaterial`            VARCHAR(256)            NULL DEFAULT NULL,
    `strNombreProveedor`                VARCHAR(256)            NULL DEFAULT NULL,
    `strBuzonProveedor`                 VARCHAR(256)            NULL DEFAULT NULL,
    `dblCantidadRequerida`              DOUBLE              NOT NULL,
    `dblCantidadCotizada`               DOUBLE              NOT NULL,
    `dblValorCotizado`                  DOUBLE                  NULL DEFAULT NULL,
    `dblDescuento`                      DOUBLE                  NULL DEFAULT NULL,
    `dtFechaNecesaria`                  DATETIME                NULL DEFAULT NULL,
    `dtFechaEntrega`                    DATETIME            NOT NULL,
    `dtFechaCreacion`                   DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Sociedad` (
    `intIdSociedad`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoSociedad`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strNombreSociedad`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionSociedad`            VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoInterlocutorComercial` (
    `intIdTipoInterlocutorComercial`    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strTipoInterlocutor`               VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionTipoInterlocutor`    VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutoresComerciales` (
    `intIdInterlocutorComercial`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoInterlocutor`             VARCHAR(255)            NULL DEFAULT NULL,
    `strNumeroIdentificacionFinanciera` VARCHAR(255)            NULL DEFAULT NULL,
    `strNombreInterlocutor`             VARCHAR(255)            NULL DEFAULT NULL,
    `strTelefono`                       VARCHAR(255)            NULL DEFAULT NULL,
    `strCelular`                        VARCHAR(255)            NULL DEFAULT NULL,
    `strFax`                            VARCHAR(255)            NULL DEFAULT NULL,
    `strEmail`                          VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdGrupoInterlocutor`            BIGINT                  NULL DEFAULT NULL,
    `intIdTipoInterlocutor`             BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutorFinanzas` (
    `intIdInterlocutorFinanzas`         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `bitImpuesto`                       BIT                     NULL DEFAULT NULL,
    `bitSujetoRetencion`                BIT                     NULL DEFAULT NULL,
    `strNumeroCertificadoRetencion`     VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaVencimiento`                TIMESTAMP               NULL DEFAULT NULL,
    `strNumeroAfiliacionSeguridad`      VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `InterlocutoresCondicionPago` (
    `intIdInterlocutorCondicionPago`    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombreCondicion`                VARCHAR(255)            NULL DEFAULT NULL,
    `fltInteresMora`                    FLOAT                   NULL DEFAULT NULL,
    `fltDescuentoTotal`                 FLOAT                   NULL DEFAULT NULL,
    `decCupoCredito`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strNumeroCuenta`                   VARCHAR(255)            NULL DEFAULT NULL,
    `strSucursal`                       VARCHAR(255)            NULL DEFAULT NULL,
    `strClaveControl`                   VARCHAR(255)            NULL DEFAULT NULL,
    `bitEntregaParcial`                 BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdListaPrecio`                  BIGINT                  NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL,
    `intIdCondicionPago`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoListaMaterial` (
    `intIdTipoListaMaterial`            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombreTipoLista`                VARCHAR(20)             NULL DEFAULT NULL,
    `strDescripcionLista`               VARCHAR(200)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TipoUnidadMedida` (
    `intIdTipoUnidadMedida`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombre`                         VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposAgentes` (
    `intIdTipoAgente`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionTipoAgente`          VARCHAR(255)            NULL DEFAULT NULL,
    `strTablaInformacion`               VARCHAR(255)            NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Agentes` (
    `intIdAgente`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdTipoAgente`                   BIGINT                  NULL DEFAULT NULL,
    `intIdEntidad`                      INT                     NULL DEFAULT NULL,
    `intIdAlmacen`                      INT                     NULL DEFAULT NULL,
    `strObservaciones`                  VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `intIdSociedad`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Bodegas` (
    `intIdBodega`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoBodega`                   VARCHAR(20)             NULL DEFAULT NULL,
    `strDescripcionBodega`              VARCHAR(255)            NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `intIdAgente`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Localizaciones` (
    `intIdLocalizacion`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdBodega`                       BIGINT                  NULL DEFAULT NULL,
    `strNombreLocalizacion`             VARCHAR(255)            NULL DEFAULT NULL,
    `strDireccion`                      VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoPostal`                   VARCHAR(255)            NULL DEFAULT NULL,
    `strPoBox`                          VARCHAR(255)            NULL DEFAULT NULL,
    `strCiudad`                         VARCHAR(255)            NULL DEFAULT NULL,
    `strPais`                           VARCHAR(255)            NULL DEFAULT NULL,
    `strRegion`                         VARCHAR(255)            NULL DEFAULT NULL,
    `strTelefono`                       VARCHAR(255)            NULL DEFAULT NULL,
    `strCelular`                        VARCHAR(255)            NULL DEFAULT NULL,
    `strFax`                            VARCHAR(255)            NULL DEFAULT NULL,
    `strEmail`                          VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Remisiones` (
    `intIdRemision`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNumeroGuia`                     VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaCreacion`                   TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaRecepcion`                  TIMESTAMP               NULL DEFAULT NULL,
    `intConcecutivoInterno`             INT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdAgenteOrigen`                 BIGINT                  NULL DEFAULT NULL,
    `intIdAgenteDestino`                BIGINT                  NULL DEFAULT NULL,
    `intIdEstadoRemision`               BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposMateriales` (
    `intIdTipoMaterial`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strTipoMaterial`                   VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionTipoMaterial`        VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Materiales` (
    `intIdMaterial`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strReferencia`                     VARCHAR(255)            NULL DEFAULT NULL,
    `bitGeneraRecibo`                   BIT                     NULL DEFAULT NULL,
    `bitVentaApartado`                  BIT                     NULL DEFAULT NULL,
    `bitPermiteDevolucion`              BIT                     NULL DEFAULT NULL,
    `strSimbolo`                        VARCHAR(255)            NULL DEFAULT NULL,
    `fltValorUnitario`                  FLOAT                   NULL DEFAULT NULL,
    `fltCosto`                          FLOAT                   NULL DEFAULT NULL,
    `bitConsumible`                     BIT                     NULL DEFAULT NULL,
    `bitProducible`                     BIT                     NULL DEFAULT NULL,
    `bitComprable`                      BIT                     NULL DEFAULT NULL,
    `bitVendible`                       BIT                     NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTiposMateriales`              BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesCostosPromedios` (
    `intIdMaterialCostoPromedio`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `decCostoPromedio`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `dtFechaInicial`                    TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaFinal`                      TIMESTAMP               NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesDescripciones` (
    `intIdMaterialDescripcion`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strCultura`                        VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionMaterial`            VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmCodigoEquivalente` (
    `intIdMmCodigoEquivalente`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strTipoCodigoEquivalente`          VARCHAR(255)            NULL DEFAULT NULL,
    `strValorCodigoEquivalente`         VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmTmcCaracteristica` (
    `intIdMmTmcCaracteristica`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdTipoMaterialCaracteristica`   BIGINT                  NULL DEFAULT NULL,
    `strTipoMaterial`                   VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionTipoMaterialCaracteristica`  VARCHAR(255)    NULL DEFAULT NULL,
    `intTipoDato`                       INT                     NULL DEFAULT NULL,
    `strReglaValidacion`                VARCHAR(255)            NULL DEFAULT NULL,
    `bitVisibleDetalle`                 BIT                     NULL DEFAULT NULL,
    `intOrdenDetall`                    INT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoMaterial`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesCaracteristicas` (
    `intIdMaterialCaracteristica`       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `strValorCaracteristica`            VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoMaterialCaracteristica`   BIGINT                  NULL DEFAULT NULL,
    `intIdTipoMaterial`                 BIGINT                  NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MmTmcdDescripciones` (
    `intIdMmTmcdDescripciones`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdTipoMaterialCaracteristica`   BIGINT                  NULL DEFAULT NULL,
    `strCultura`                        VARCHAR(255)            NULL DEFAULT NULL,
    `strDescripcionMaterial`            VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposMovimientos` (
    `intIdTipoMovimiento`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionTipoMovimiento`      VARCHAR(255)            NULL DEFAULT NULL,
    `bitSigno`                          BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentos` (
    `intIdTipoDocumento`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strDescripcionTipoDocumento`       VARCHAR(255)            NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoMovimiento`               BIGINT                  NULL DEFAULT NULL,
    `intIdEstadoRemision`               BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Consecutivos` (
    `intIdConsecutivo`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strResolucion`                     VARCHAR(255)            NULL DEFAULT NULL,
    `intValorInicial`                   INT                     NULL DEFAULT NULL,
    `intValorFinal`                     INT                     NULL DEFAULT NULL,
    `intIncremento`                     INT                     NULL DEFAULT NULL,
    `intValorActual`                    INT                     NULL DEFAULT NULL,
    `strCaracterLlenado`                VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaInicial`                    TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaFinal`                      TIMESTAMP               NULL DEFAULT NULL,
    `strSufijo`                         VARCHAR(255)            NULL DEFAULT NULL,
    `strPrefijo`                        VARCHAR(255)            NULL DEFAULT NULL,
    `bitHabilitado`                     BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Movimientos` (
    `intIdMovimiento`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdRemision`                     BIGINT                  NULL DEFAULT NULL,
    `strNumeroDocumento`                VARCHAR(255)            NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL,
    `intIdTipoMovimiento`               BIGINT                  NULL DEFAULT NULL,
    `intIdEstadoMovimiento`             BIGINT                  NULL DEFAULT NULL,
    `intIdConcepto`                     BIGINT                  NULL DEFAULT NULL,
    `dtFechaCreacion`                   TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `dtFechaAnulacion`                  TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01',
    `intIdBodega`                       BIGINT                  NULL DEFAULT NULL,
    `decSobreCosto`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decSobreCostoAplicadoProducto`     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strObservaciones`                  VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01'
);

CREATE TABLE IF NOT EXISTS `MovimientosDetalles` (
    `intIdMovimientoDetalle`            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNumeroDocumento`                VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoProducto`                 VARCHAR(255)            NULL DEFAULT NULL,
    `decValorUnitario`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decSobreCosto`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decCantidad`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `intIdEstadoSaldo`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesCompras` (
    `intIdRemisionCompra`               BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNumeroRemisionCompra`           VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaContabilizacion`            TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaValidez`                    TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaDocumento`                  TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaNecesaria`                  TIMESTAMP               NULL DEFAULT NULL,
    `strNumeroReferencia`               VARCHAR(255)            NULL DEFAULT NULL,
    `decTotalBruto`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `dblPorcentajeDescuento`            DOUBLE                  NULL DEFAULT NULL,
    `dblPorcentajeImpuesto`             DOUBLE                  NULL DEFAULT NULL,
    `decValorTotal`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strComentarios`                    VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL,
    `intIdRemision`                     BIGINT                  NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesComprasMateriales` (
    `intIdRemisionCompraMaterial`       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNumeroRemisionCompra`           VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaNecesaria`                  TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaSolicitud`                  TIMESTAMP               NULL DEFAULT NULL,
    `dblCantidad`                       DOUBLE                  NULL DEFAULT NULL,
    `decValorUnitario`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `fltPorcentajeDescuento`            FLOAT                   NULL DEFAULT NULL,
    `decCostoPromedio`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdRemisionCompra`               BIGINT                  NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesVenta` (
    `strNumeroDocumento`                VARCHAR(255)        NOT NULL PRIMARY KEY,
    `dtFechaContabilizacion`            TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaValidez`                    TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaDocumento`                  TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaNecesaria`                  TIMESTAMP               NULL DEFAULT NULL,
    `strNumeroReferencia`               VARCHAR(255)            NULL DEFAULT NULL,
    `decTotalBruto`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `dblPorcentajeDescuento`            DOUBLE                  NULL DEFAULT NULL,
    `dblPorcentajeImpuesto`             DOUBLE                  NULL DEFAULT NULL,
    `decValorTotal`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strComentarios`                    VARCHAR(255)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL,
    `intIdRemision`                     BIGINT                  NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL,
    `intListaPrecio`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentosConceptos` (
    `intIdTipoDocumentoConcepto`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL,
    `intIdConcepto`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `TiposDocumentosTiposAgentes` (
    `intIdTipoDocumentoTipoAgente`      BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoDocumento`                BIGINT                  NULL DEFAULT NULL,
    `intIdTipoAgente`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `UnidadMedida` (
    `intIdUnidadMedida`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNombre`                         VARCHAR(255)            NULL DEFAULT NULL,
    `strSimbolo`                        VARCHAR(255)            NULL DEFAULT NULL,
    `fltFactor`                         FLOAT                   NULL DEFAULT NULL,
    `fltPrecision`                      FLOAT                   NULL DEFAULT NULL,
    `fltConversion`                     FLOAT                   NULL DEFAULT NULL,
    `intDecimales`                      INT                     NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdTipoUnidadMedida`             BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ListaDeMateriales` (
    `intIdListaMaterial`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdUnidadMedida`                 BIGINT                  NULL DEFAULT NULL,
    `intIdTipoListaMaterial`            BIGINT                  NULL DEFAULT NULL,
    `intIdBodega`                       BIGINT                  NULL DEFAULT NULL,
    `dtFechaInicio`                     DATETIME                NULL DEFAULT NULL,
    `dtFechaFin`                        DATETIME                NULL DEFAULT NULL,
    `intCantidad`                       INT                     NULL DEFAULT NULL,
    `strCodigoMaterial`                 VARCHAR(20)             NULL DEFAULT NULL,
    `strCodigoComponente`               VARCHAR(20)             NULL DEFAULT NULL,
    `intIdListaPrecio`                  BIGINT                  NULL DEFAULT NULL,
    `decPrecioUnitario`                 DECIMAL(18, 1)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(100)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `MaterialesDatosCompra` (
    `intIdMaterialDatoCompra`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoMaterialCompra`           VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `bitAutomaticPurchase`              BIT                     NULL DEFAULT NULL,
    `bitGestionLotes`                   BIT                     NULL DEFAULT NULL,
    `decToleranciaEntregaInferior`      DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decToleranciaEntregaSuperior`      DECIMAL(10, 2)          NULL DEFAULT NULL,
    `intDiasEntrega`                    INT                     NULL DEFAULT NULL,
    `bitRequiereInspeccion`             BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL,
    `intIdUnidadMedidaBase`             BIGINT                  NULL DEFAULT NULL,
    `intIdUnidadMedidaCompra`           BIGINT                  NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL,
    `intIdInterlocutor`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `OrdenProduccion` (
    `strNumeroOrden`                    VARCHAR(20)         NOT NULL PRIMARY KEY,
    `strReferencia`                     VARCHAR(20)             NULL DEFAULT NULL,
    `strCodigoMateria`                  VARCHAR(20)             NULL DEFAULT NULL,
    `intIdEstadoProduccion`             BIGINT                  NULL DEFAULT NULL,
    `intIdRutaOrdenTrabajo`             BIGINT                  NULL DEFAULT NULL,
    `intIdListaMateriales`              BIGINT                  NULL DEFAULT NULL,
    `intIdUnidadMedida`                 BIGINT                  NULL DEFAULT NULL,
    `intIdCentroTrabajo`                BIGINT                  NULL DEFAULT NULL,
    `dtFechaEstimada`                   DATETIME                NULL DEFAULT NULL,
    `dtFechaInicioEstimada`             DATETIME                NULL DEFAULT NULL,
    `dtFechaFinalizacion`               DATETIME                NULL DEFAULT NULL,
    `decCantidadPlanificada`            DECIMAL(18, 1)          NULL DEFAULT NULL,
    `strOrigenOrden`                    VARCHAR(20)             NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(20)             NULL DEFAULT NULL,
    `dtFecha`                           DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Componentes` (
    `intIdComponente`                   BIGINT              NOT NULL PRIMARY KEY,
    `strNumeroOrden`                    VARCHAR(20)             NULL DEFAULT NULL,
    `strCodigoMaterial`                 VARCHAR(20)             NULL DEFAULT NULL,
    `intIdUnidadMedida`                 BIGINT                  NULL DEFAULT NULL,
    `intIdAlmacen`                      BIGINT                  NULL DEFAULT NULL,
    `decCantidadBase`                   DECIMAL(18, 1)          NULL DEFAULT NULL,
    `decCantidadRequerida`              DECIMAL(18, 1)          NULL DEFAULT NULL,
    `decCantidadAdicional`              DECIMAL(18, 1)          NULL DEFAULT NULL,
    `decCantidadConsumida`              DECIMAL(18, 1)          NULL DEFAULT NULL,
    `dtFechaEstimada`                   DATETIME                NULL DEFAULT NULL,
    `dtFechaEfectiva`                   DATETIME                NULL DEFAULT NULL,
    `dtFechaInicio`                     DATETIME                NULL DEFAULT NULL,
    `dtFechaFinal`                      DATETIME                NULL DEFAULT NULL,
    `intIdEstadoComponente`             BIGINT                  NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(20)             NULL DEFAULT NULL,
    `dtFecha`                           DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `OrdenDeTrabajo` (
    `intIdOrdenTrabajo`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdOperacion`                    BIGINT                  NULL DEFAULT NULL,
    `intIdCentroTrabajo`                BIGINT                  NULL DEFAULT NULL,
    `intIdEstadoOT`                     BIGINT                  NULL DEFAULT NULL,
    `strNumeroOrden`                    VARCHAR(20)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `RemisionesVentaMateriales` (
    `intIdRemisionVentaMaterial`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strNumeroDocumento`                VARCHAR(255)            NULL DEFAULT NULL,
    `strCodigoMaterial`                 VARCHAR(255)            NULL DEFAULT NULL,
    `dtFechaNecesaria`                  TIMESTAMP               NULL DEFAULT NULL,
    `dtFechaSolicitud`                  TIMESTAMP               NULL DEFAULT NULL,
    `dblCantidad`                       DOUBLE                  NULL DEFAULT NULL,
    `decValorUnitario`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `fltPorcentajeDescuento`            FLOAT                   NULL DEFAULT NULL,
    `decCostoPromedio`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `intIdRemisionCompra`               BIGINT                  NULL DEFAULT NULL,
    `intIdMaterial`                     BIGINT                  NULL DEFAULT NULL,
    `intIdUnidadMedida`                 BIGINT                  NULL DEFAULT NULL,
    `decCantidadUnidadMedida`           DECIMAL(18, 1)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Zonas` (
    `strCodigoZona`                     VARCHAR(20)         NOT NULL PRIMARY KEY,
    `intIdBodega`                       BIGINT                  NULL DEFAULT NULL,
    `strDescripcionZona`                VARCHAR(255)            NULL DEFAULT NULL,
    `bitTransitoDirecto`                BIT                     NULL DEFAULT NULL,
    `bitPicking`                        BIT                     NULL DEFAULT NULL,
    `bitUbicacion`                      BIT                     NULL DEFAULT NULL,
    `bitDespacho`                       BIT                     NULL DEFAULT NULL,
    `bitRecepcion`                      BIT                     NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `Ubicaciones` (
    `intIdUbicacion`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `strCodigoUbicacion`                VARCHAR(20)         NOT NULL,
    `strCodigoZona`                     VARCHAR(20)             NULL DEFAULT NULL,
    `strDescripcionUbicacion`           VARCHAR(255)            NULL DEFAULT NULL,
    `bitDedicado`                       BIT                     NULL DEFAULT NULL,
    `bitActivo`                         BIT                     NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `Saldos` (
    `intIdSaldo`                        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdEstadoSaldo`                  BIGINT                  NULL DEFAULT NULL,
    `intIdUbicacion`                    BIGINT                  NULL DEFAULT NULL,
    `strCodigoProducto`                 VARCHAR(255)            NULL DEFAULT NULL,
    `decCantidad`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(255)            NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `GrupoInterlocutores`
    ADD CONSTRAINT `fkGrupoInterlocutoresListaPrecioId`
        FOREIGN KEY (`intIdListaPrecio`)
        REFERENCES `ListasPrecios` (`intIdListaPrecio`);

ALTER TABLE `Cotizacion`
    ADD CONSTRAINT `cotizacionPlanCompraIdFk`
        FOREIGN KEY (`intIdPlanCompra`)
        REFERENCES `PlanCompra` (`intIdPlanCompra`);

CREATE OR REPLACE INDEX `cotizacionIdPlanCompraIndex`
        ON `Cotizacion` (`intIdPlanCompra`);

CREATE OR REPLACE INDEX `cotizacionMaterialesIdFk`
        ON `Cotizacion` (`intCodigoMaterial`);

CREATE OR REPLACE INDEX `planCompraMaterialIndex`
        ON `PlanCompra` (`intCodigoMaterial`);

ALTER TABLE `InterlocutoresComerciales`
    ADD CONSTRAINT `fkInterlocutoresComercialesGrupoInterlocutorId`
        FOREIGN KEY (`intIdGrupoInterlocutor`)
        REFERENCES `GrupoInterlocutores` (`intIdGrupoInterlocutor`),
    ADD CONSTRAINT `fkInterlocutoresComercialesTipointerlocutorId`
        FOREIGN KEY (`intIdTipoInterlocutor`)
        REFERENCES `TipoInterlocutorComercial` (`intIdTipoInterlocutorComercial`);

ALTER TABLE `InterlocutorFinanzas`
    ADD CONSTRAINT `fkInterlocutoresComercialesFinanzasInterlocutorId`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`);

ALTER TABLE `InterlocutoresCondicionPago`
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoCondicionPagoId`
        FOREIGN KEY (`intIdCondicionPago`)
        REFERENCES `CondicionesPagos` (`intIdCondicionPago`),
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoListaPrecioId`
        FOREIGN KEY (`intIdListaPrecio`)
        REFERENCES `ListasPrecios` (`intIdListaPrecio`),
    ADD CONSTRAINT `fkInterlocutoresCondicionPagoInterlocutorId`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`);

ALTER TABLE `Agentes`
    ADD CONSTRAINT `agentesSociedadIdFk`
        FOREIGN KEY (`intIdSociedad`)
        REFERENCES `Sociedad` (`intIdSociedad`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `agentesTiposAgentesIdFk`
        FOREIGN KEY (`intIdTipoAgente`)
        REFERENCES `TiposAgentes` (`intIdTipoAgente`)
        ON UPDATE CASCADE;

ALTER TABLE `Bodegas`
    ADD CONSTRAINT `bodegasCodigoBodegaUindex`
        UNIQUE (`strCodigoBodega`),
    ADD CONSTRAINT `bodegasAgentesIdFk`
        FOREIGN KEY (`intIdAgente`)
        REFERENCES `Agentes` (`intIdAgente`)
        ON UPDATE CASCADE;

ALTER TABLE `Localizaciones`
    ADD CONSTRAINT `fkLocalizacionesInterlocutorId`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`),
    ADD CONSTRAINT `localizacionesBodegasIdFk`
        FOREIGN KEY (`intIdBodega`)
        REFERENCES `Bodegas` (`intIdBodega`)
        ON UPDATE CASCADE;

ALTER TABLE `Remisiones`
    ADD CONSTRAINT `fkRemisionesAgentedestinoId`
        FOREIGN KEY (`intIdAgenteDestino`)
        REFERENCES `Agentes` (`intIdAgente`),
    ADD CONSTRAINT `fkRemisionesAgenteorigenId`
        FOREIGN KEY (`intIdAgenteOrigen`)
        REFERENCES `Agentes` (`intIdAgente`),
    ADD CONSTRAINT `fkRemisionesEstadoRemisionId`
        FOREIGN KEY (`intIdEstadoRemision`)
        REFERENCES `EstadosRemisiones` (`intIdEstadoRemision`);

ALTER TABLE `Materiales`
    ADD CONSTRAINT `materialesCodigoProductoUindex`
        UNIQUE (`strCodigoMaterial`),
    ADD CONSTRAINT `materialesTiposMaterialesIdTipoMaterialFk`
        FOREIGN KEY (`intIdTiposMateriales`)
        REFERENCES `TiposMateriales` (`intIdTipoMaterial`)
        ON UPDATE CASCADE;

ALTER TABLE `MaterialesCostosPromedios`
    ADD CONSTRAINT `materialesCostosPromediosMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE;

ALTER TABLE `MaterialesDescripciones`
    ADD CONSTRAINT `materialesDescripcionesMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`);

CREATE OR REPLACE INDEX `materialesDescripcionesCodigoMaterialIndex`
        ON `MaterialesDescripciones` (`strCodigoMaterial`);

ALTER TABLE `MmCodigoEquivalente`
    ADD CONSTRAINT `mmCodigoEquivalenteMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE;

CREATE OR REPLACE INDEX `mmCodigoEquivalenteCodigoMaterialIndex`
        ON `MmCodigoEquivalente` (`strCodigoMaterial`);

ALTER TABLE `MmTmcCaracteristica`
    ADD CONSTRAINT `fkTiposMaterialesCaracteristicasTipoMaterialId`
        FOREIGN KEY (`intIdTipoMaterial`)
        REFERENCES `TiposMateriales` (`intIdTipoMaterial`);

ALTER TABLE `MaterialesCaracteristicas`
    ADD CONSTRAINT `materialesCaracteristicasMaterialesIdMaterialFk`
        FOREIGN KEY (`intIdMaterial`)
        REFERENCES `Materiales` (`intIdMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `materialesCaracteristicasMmTmcCaracteristicaFk`
        FOREIGN KEY (`intIdTipoMaterialCaracteristica`)
        REFERENCES `MmTmcCaracteristica` (`intIdMmTmcCaracteristica`)
        ON UPDATE CASCADE;

ALTER TABLE `MaterialesCaracteristicas`
    ADD CONSTRAINT `materialesCaracteristicasTiposMaterialesIdTipoMaterialFk`
        FOREIGN KEY (`intIdTipoMaterial`)
        REFERENCES `TiposMateriales` (`intIdTipoMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `materialesCaracteristicasFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE;

CREATE OR REPLACE INDEX `materialesCaracteristicasIdTipoMaterialCaracteristicaIndex`
        ON `MaterialesCaracteristicas` (`intIdTipoMaterialCaracteristica`);

CREATE OR REPLACE INDEX `materialesCaracteristicasCodigoMaterialIndex`
        ON `MaterialesCaracteristicas` (`strCodigoMaterial`);

CREATE OR REPLACE INDEX `mmTmcCaracteristicaIdTipoMaterialCaracteristicaIndex`
        ON `MmTmcCaracteristica` (`intIdTipoMaterialCaracteristica`);

ALTER TABLE `MmTmcdDescripciones`
    ADD CONSTRAINT `mmTmcdTmcFk`
        FOREIGN KEY (`intIdTipoMaterialCaracteristica`)
        REFERENCES `MmTmcCaracteristica` (`intIdMmTmcCaracteristica`)
        ON UPDATE CASCADE;

CREATE OR REPLACE INDEX `mmTmcdDescripcionesTipoMaterialCaracteristicaIndex`
        ON `MmTmcdDescripciones` (`intIdTipoMaterialCaracteristica`);

ALTER TABLE `TiposDocumentos`
    ADD CONSTRAINT `fkTiposDocumentosEstadoRemisionId`
        FOREIGN KEY (`intIdEstadoRemision`)
        REFERENCES `EstadosRemisiones` (`intIdEstadoRemision`),
    ADD CONSTRAINT `fkTiposDocumentosTipoMovimientoId1`
        FOREIGN KEY (`intIdTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`intIdTipoMovimiento`),
    ADD CONSTRAINT `fkTiposDocumentosTipomovimientoId2`
        FOREIGN KEY (`intIdTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`intIdTipoMovimiento`);

ALTER TABLE `Consecutivos`
    ADD CONSTRAINT `consecutivosTiposDocumentosIdFk`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`)
        ON UPDATE CASCADE;

ALTER TABLE `Movimientos`
    ADD CONSTRAINT `movimientosNumeroDocumentoUindex`
        UNIQUE (`strNumeroDocumento`),
    ADD CONSTRAINT `movimientosBodegasIdFk`
        FOREIGN KEY (`intIdBodega`)
        REFERENCES `Bodegas` (`intIdBodega`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `movimientosConceptosIdFk`
        FOREIGN KEY (`intIdConcepto`)
        REFERENCES `Conceptos` (`intIdConcepto`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `movimientosEstadosMovimientosIdFk`
        FOREIGN KEY (`intIdEstadoMovimiento`)
        REFERENCES `EstadosMovimientos` (`intIdEstadoMovimiento`)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    ADD CONSTRAINT `movimientosRemisionesIdFk`
        FOREIGN KEY (`intIdRemision`)
        REFERENCES `Remisiones` (`intIdRemision`)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    ADD CONSTRAINT `movimientosTiposDocumentosIdFk`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    ADD CONSTRAINT `movimientosTiposMovimientosIdFk`
        FOREIGN KEY (`intIdTipoMovimiento`)
        REFERENCES `TiposMovimientos` (`intIdTipoMovimiento`)
        ON UPDATE CASCADE;

ALTER TABLE `MovimientosDetalles`
    ADD CONSTRAINT `movimientosDetallesEstadosSaldosIdFk`
        FOREIGN KEY (`intIdEstadoSaldo`)
        REFERENCES `EstadosSaldos` (`intIdEstadoSaldo`),
    ADD CONSTRAINT `movimientosDetallesMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoProducto`)
        REFERENCES `Materiales` (`strCodigoMaterial`),
    ADD CONSTRAINT `movimientosDetallesMovimientosNumeroDocumentoFk`
        FOREIGN KEY (`strNumeroDocumento`)
        REFERENCES `Movimientos` (`strNumeroDocumento`);

ALTER TABLE `RemisionesCompras`
    ADD CONSTRAINT `fkRemisionesComprasTipoDocumentoId`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`),
    ADD CONSTRAINT `fkRemisionesComprasInterlocutorId`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`),
    ADD CONSTRAINT `fkRemisionesComprasRemisionId`
        FOREIGN KEY (`intIdRemision`)
        REFERENCES `Remisiones` (`intIdRemision`);

ALTER TABLE `RemisionesComprasMateriales`
    ADD CONSTRAINT `fkRemisionesComprasMaterialesMaterialId`
        FOREIGN KEY (`intIdMaterial`)
        REFERENCES `Materiales` (`intIdMaterial`),
    ADD CONSTRAINT `fkRemisionesComprasMaterialesRemisionCompraId`
        FOREIGN KEY (`intIdRemisionCompra`)
        REFERENCES `RemisionesCompras` (`intIdRemisionCompra`);

ALTER TABLE `RemisionesVenta`
    ADD CONSTRAINT `remisionesVentaListasPreciosIdListaPrecioFk`
        FOREIGN KEY (`intListaPrecio`)
        REFERENCES `ListasPrecios` (`intIdListaPrecio`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `fkRemisionesVentaTipoDocumentoId`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`),
    ADD CONSTRAINT `fkRemisionesVentaInterlocutorId`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`),
    ADD CONSTRAINT `fkRemisionesVentaRemisionId`
        FOREIGN KEY (`intIdRemision`)
        REFERENCES `Remisiones` (`intIdRemision`);

ALTER TABLE `TiposDocumentosConceptos`
    ADD CONSTRAINT `tiposDocumentosConceptosConceptosIdFk`
        FOREIGN KEY (`intIdConcepto`)
        REFERENCES `Conceptos` (`intIdConcepto`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `tiposDocumentosConceptosTiposDocumentosIdFk`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`)
        ON UPDATE CASCADE;

ALTER TABLE `TiposDocumentosTiposAgentes`
    ADD CONSTRAINT `tiposDocumentosTiposAgentesTiposAgentesIdFk`
        FOREIGN KEY (`intIdTipoAgente`)
        REFERENCES `TiposAgentes` (`intIdTipoAgente`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `tiposDocumentosTiposAgentesTiposDocumentosIdFk`
        FOREIGN KEY (`intIdTipoDocumento`)
        REFERENCES `TiposDocumentos` (`intIdTipoDocumento`)
        ON UPDATE CASCADE;

ALTER TABLE `UnidadMedida`
    ADD CONSTRAINT `fkUnidadMedidaTipoUnidadMedidaId`
        FOREIGN KEY (`intIdTipoUnidadMedida`)
        REFERENCES `TipoUnidadMedida` (`intIdTipoUnidadMedida`);

ALTER TABLE `ListaDeMateriales`
    ADD CONSTRAINT `listaDeMaterialesPk`
        UNIQUE (`intIdListaMaterial`),
    ADD CONSTRAINT `listaDeMaterialesBodegasIdBodegaFk`
        FOREIGN KEY (`intIdBodega`)
        REFERENCES `Bodegas` (`intIdBodega`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `listaDeMaterialesListasPreciosIdListaPrecioFk`
        FOREIGN KEY (`intIdListaPrecio`)
        REFERENCES `ListasPrecios` (`intIdListaPrecio`),
    ADD CONSTRAINT `listaDeMaterialesMaterialesCodigoMaterialFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `listaDeMaterialesMaterialesCodigoMaterialFk2`
        FOREIGN KEY (`strCodigoComponente`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `listaDeMaterialesIdTipoListaMaterialFk`
        FOREIGN KEY (`intIdTipoListaMaterial`)
        REFERENCES `TipoListaMaterial` (`intIdTipoListaMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `listaDeMaterialesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`intIdUnidadMedida`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE;

ALTER TABLE `MaterialesDatosCompra`
    ADD CONSTRAINT `materialesDatosCompraInterlocutoresComercialesFk`
        FOREIGN KEY (`intIdInterlocutor`)
        REFERENCES `InterlocutoresComerciales` (`intIdInterlocutorComercial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `materialesDatosCompraUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`intIdUnidadMedidaBase`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `materialesDatosCompraUnidadMedidaIdUnidadMedidaFk2`
        FOREIGN KEY (`intIdUnidadMedidaCompra`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `materialesDatosCompraMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE;

CREATE OR REPLACE INDEX `materialesDatosCompraCodigoMaterialIndex`
        ON `MaterialesDatosCompra` (`strCodigoMaterial`);

ALTER TABLE `OrdenProduccion`
    ADD CONSTRAINT `ordenProduccionListaDeMaterialesIdListaMaterialFk`
        FOREIGN KEY (`intIdListaMateriales`)
        REFERENCES `ListaDeMateriales` (`intIdListaMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `ordenProduccionMaterialesCodigoMaterialFk`
        FOREIGN KEY (`strCodigoMateria`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `ordenProduccionUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`intIdUnidadMedida`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE;

ALTER TABLE `Componentes`
    ADD CONSTRAINT `componentesMaterialesCodigoMaterialFk`
        FOREIGN KEY (`strCodigoMaterial`)
        REFERENCES `Materiales` (`strCodigoMaterial`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `componentesOrdenProduccionNumeroOrdenFk`
        FOREIGN KEY (`strNumeroOrden`)
        REFERENCES `OrdenProduccion` (`strNumeroOrden`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `componentesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`intIdUnidadMedida`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE;

ALTER TABLE `OrdenDeTrabajo`
    ADD CONSTRAINT `ordenDeTrabajoCentrosTrabajosIdCentroDeTrabajoFk`
        FOREIGN KEY (`intIdCentroTrabajo`)
        REFERENCES `CentrosTrabajos` (`intIdCentroDeTrabajo`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `ordenDeTrabajoOrdenProduccionNumeroOrdenFk`
        FOREIGN KEY (`strNumeroOrden`)
        REFERENCES `OrdenProduccion` (`strNumeroOrden`)
        ON UPDATE CASCADE;

ALTER TABLE `RemisionesVentaMateriales`
    ADD CONSTRAINT `remisionesVentaMaterialesUnidadMedidaIdUnidadMedidaFk`
        FOREIGN KEY (`intIdUnidadMedida`)
        REFERENCES `UnidadMedida` (`intIdUnidadMedida`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `fkRemisionesVentaMaterialesMaterialId`
        FOREIGN KEY (`intIdMaterial`)
        REFERENCES `Materiales` (`intIdMaterial`),
    ADD CONSTRAINT `fkRemisionesVentaMaterialesRemisionCompraId`
        FOREIGN KEY (`strNumeroDocumento`)
        REFERENCES `RemisionesVenta` (`strNumeroDocumento`);

ALTER TABLE `Zonas`
    ADD CONSTRAINT `izonasCodigoZonaUindex`
        UNIQUE (`strCodigoZona`),
    ADD CONSTRAINT `zonasBodegasIdFk`
        FOREIGN KEY (`intIdBodega`)
        REFERENCES `Bodegas` (`intIdBodega`)
        ON UPDATE CASCADE;

ALTER TABLE `Ubicaciones`
    ADD CONSTRAINT `ubicacionesCodigoUbicacionUindex`
        UNIQUE (`strCodigoUbicacion`),
    ADD CONSTRAINT `ubicacionesZonasCodigoZonaFk`
        FOREIGN KEY (`strCodigoZona`)
        REFERENCES `Zonas` (`strCodigoZona`)
        ON UPDATE CASCADE;

ALTER TABLE `Saldos`
    ADD CONSTRAINT `saldosEstadosSaldosIdFk`
        FOREIGN KEY (`intIdEstadoSaldo`)
        REFERENCES `EstadosSaldos` (`intIdEstadoSaldo`)
        ON UPDATE CASCADE,
    ADD CONSTRAINT `saldosMaterialesCodigoProductoFk`
        FOREIGN KEY (`strCodigoProducto`)
        REFERENCES `Materiales` (`strCodigoMaterial`),
    ADD CONSTRAINT `saldosUbicacionesIdFk`
        FOREIGN KEY (`intIdUbicacion`)
        REFERENCES `Ubicaciones` (`intIdUbicacion`)
        ON UPDATE CASCADE
        ON DELETE CASCADE;

CREATE OR REPLACE INDEX `saldosCodigoProductoIndex`
        ON `Saldos` (`strCodigoProducto`);
