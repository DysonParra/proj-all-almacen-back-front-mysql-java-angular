DROP DATABASE IF EXISTS `almacen`;
CREATE DATABASE IF NOT EXISTS `almacen`;
USE `almacen`;

CREATE TABLE IF NOT EXISTS `centros_trabajos` (
    `id_centro_de_trabajo`              BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_interlocutor_comercial`         BIGINT                  NULL DEFAULT NULL,
    `id_categoria_centro`               BIGINT                  NULL DEFAULT NULL,
    `costo`                             DECIMAL(18, 1)          NULL DEFAULT NULL,
    `id_bodega`                         BIGINT                  NULL DEFAULT NULL,
    `id_metodo_costeo`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `conceptos` (
    `id_concepto`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_concepto`              VARCHAR(255)            NULL DEFAULT NULL,
    `reposicion`                        BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `condiciones_pagos` (
    `id_condicion_pago`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_condicion`                  VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(255)            NULL DEFAULT NULL,
    `deudor`                            BIT                     NULL DEFAULT NULL,
    `acreedor`                          BIT                     NULL DEFAULT NULL,
    `diia_fijo`                         INT                     NULL DEFAULT NULL,
    `meses_adicionales`                 INT                     NULL DEFAULT NULL,
    `dias_tolerancia`                   INT                     NULL DEFAULT NULL,
    `numero_plazos`                     INT                     NULL DEFAULT NULL,
    `descuento_total`                   FLOAT                   NULL DEFAULT NULL,
    `interes_credito`                   FLOAT                   NULL DEFAULT NULL,
    `haber_maximo`                      DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `estados_movimientos` (
    `id_estado_movimiento`              BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_estado_movimiento`     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `estados_remisiones` (
    `id_estado_remision`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_estado_remision`       VARCHAR(255)        NOT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `estados_saldos` (
    `id_estado_saldo`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_estado_saldo`          VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_color`                      VARCHAR(255)            NULL DEFAULT NULL,
    `esta_en_reposicion`                BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `listas_precios` (
    `id_lista_precio`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_lista_precios`              VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_lista_precios`         VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `grupo_interlocutores` (
    `id_grupo_interlocutor`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_grupo`                      VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(255)            NULL DEFAULT NULL,
    `cuenta_contable`                   VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_lista_precio`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `listas_precios_materiales` (
    `id`                                BIGINT              NOT NULL PRIMARY KEY,
    `id_materiales`                     BIGINT              NOT NULL,
    `id_listas_precios`                 BIGINT              NOT NULL
);

CREATE TABLE IF NOT EXISTS `plan_compra` (
    `id_plan_compra`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   BIGINT                  NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(100)        NOT NULL,
    `cantidad`                          DOUBLE              NOT NULL,
    `id_grupo_proveedor`                INT                     NULL DEFAULT NULL,
    `fecha_explosion`                   DATETIME                NULL DEFAULT NULL,
    `fecha_creacion`                    DATETIME                NULL DEFAULT NULL,
    `fecha_modificacion`                DATETIME                NULL DEFAULT NULL,
    `usuario`                           VARCHAR(100)            NULL DEFAULT NULL,
    `estado`                            VARCHAR(10)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `cotizacion` (
    `id_cotizacion`                     INT                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cabecera`                          INT                     NULL DEFAULT NULL,
    `id_plan_compra`                    BIGINT                  NULL,
    `id_proveedor`                      INT                 NOT NULL,
    `estado`                            VARCHAR(20)             NULL DEFAULT NULL,
    `codigo_material`                   BIGINT                  NULL DEFAULT NULL,
    `descripcion_material`              VARCHAR(256)            NULL DEFAULT NULL,
    `nombre_proveedor`                  VARCHAR(256)            NULL DEFAULT NULL,
    `buzon_proveedor`                   VARCHAR(256)            NULL DEFAULT NULL,
    `cantidad_requerida`                DOUBLE              NOT NULL,
    `cantidad_cotizada`                 DOUBLE              NOT NULL,
    `valor_cotizado`                    DOUBLE                  NULL DEFAULT NULL,
    `descuento`                         DOUBLE                  NULL DEFAULT NULL,
    `fecha_necesaria`                   DATETIME                NULL DEFAULT NULL,
    `fecha_entrega`                     DATETIME            NOT NULL,
    `fecha_creacion`                    DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `sociedad` (
    `id_sociedad`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_sociedad`                   VARCHAR(255)            NULL DEFAULT NULL,
    `nombre_sociedad`                   VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_sociedad`              VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipo_interlocutor_comercial` (
    `id_tipo_interlocutor_comercial`    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `tipo_interlocutor`                 VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_tipo_interlocutor`     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `interlocutores_comerciales` (
    `id_interlocutor_comercial`         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_interlocutor`               VARCHAR(255)            NULL DEFAULT NULL,
    `numero_identificacion_financiera`  VARCHAR(255)            NULL DEFAULT NULL,
    `nombre_interlocutor`               VARCHAR(255)            NULL DEFAULT NULL,
    `telefono`                          VARCHAR(255)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fax`                               VARCHAR(255)            NULL DEFAULT NULL,
    `email`                             VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_grupo_interlocutor`             BIGINT                  NULL DEFAULT NULL,
    `id_tipo_interlocutor`              BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `interlocutor_finanzas` (
    `id_interlocutor_finanzas`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `impuesto`                          BIT                     NULL DEFAULT NULL,
    `sujeto_retencion`                  BIT                     NULL DEFAULT NULL,
    `numero_certificado_retencion`      VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_vencimiento`                 TIMESTAMP               NULL DEFAULT NULL,
    `numero_afiliacion_seguridad`       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `interlocutores_condicion_pago` (
    `id_interlocutor_condicion_pago`    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_condicion`                  VARCHAR(255)            NULL DEFAULT NULL,
    `interes_mora`                      FLOAT                   NULL DEFAULT NULL,
    `descuento_total`                   FLOAT                   NULL DEFAULT NULL,
    `cupo_credito`                      DECIMAL(10, 2)          NULL DEFAULT NULL,
    `numero_cuenta`                     VARCHAR(255)            NULL DEFAULT NULL,
    `sucursal`                          VARCHAR(255)            NULL DEFAULT NULL,
    `clave_control`                     VARCHAR(255)            NULL DEFAULT NULL,
    `entrega_parcial`                   BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_lista_precio`                   BIGINT                  NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL,
    `id_condicion_pago`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipo_lista_material` (
    `id_tipo_lista_material`            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_tipo_lista`                 VARCHAR(20)             NULL DEFAULT NULL,
    `descripcion_lista`                 VARCHAR(200)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipo_unidad_medida` (
    `id_tipo_unidad_medida`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre`                            VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_agentes` (
    `id_tipo_agente`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_tipo_agente`           VARCHAR(255)            NULL DEFAULT NULL,
    `tabla_informacion`                 VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `agentes` (
    `id_agente`                         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_tipo_agente`                    BIGINT                  NULL DEFAULT NULL,
    `id_entidad`                        INT                     NULL DEFAULT NULL,
    `id_almacen`                        INT                     NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `id_sociedad`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `bodegas` (
    `id_bodega`                         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_bodega`                     VARCHAR(20)             NULL DEFAULT NULL,
    `descripcion_bodega`                VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `id_agente`                         BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `localizaciones` (
    `id_localizacion`                   BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_bodega`                         BIGINT                  NULL DEFAULT NULL,
    `nombre_localizacion`               VARCHAR(255)            NULL DEFAULT NULL,
    `direccion`                         VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_postal`                     VARCHAR(255)            NULL DEFAULT NULL,
    `po_box`                            VARCHAR(255)            NULL DEFAULT NULL,
    `ciudad`                            VARCHAR(255)            NULL DEFAULT NULL,
    `pais`                              VARCHAR(255)            NULL DEFAULT NULL,
    `region`                            VARCHAR(255)            NULL DEFAULT NULL,
    `telefono`                          VARCHAR(255)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fax`                               VARCHAR(255)            NULL DEFAULT NULL,
    `email`                             VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `remisiones` (
    `id_remision`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_guia`                       VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_creacion`                    TIMESTAMP               NULL DEFAULT NULL,
    `fecha_recepcion`                   TIMESTAMP               NULL DEFAULT NULL,
    `concecutivo_interno`               INT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_agente_origen`                  BIGINT                  NULL DEFAULT NULL,
    `id_agente_destino`                 BIGINT                  NULL DEFAULT NULL,
    `id_estado_remision`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_materiales` (
    `id_tipo_material`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `tipo_material`                     VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_tipo_material`         VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `materiales` (
    `id_material`                       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `referencia`                        VARCHAR(255)            NULL DEFAULT NULL,
    `genera_recibo`                     BIT                     NULL DEFAULT NULL,
    `venta_apartado`                    BIT                     NULL DEFAULT NULL,
    `permite_devolucion`                BIT                     NULL DEFAULT NULL,
    `simbolo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `valor_unitario`                    FLOAT                   NULL DEFAULT NULL,
    `costo`                             FLOAT                   NULL DEFAULT NULL,
    `consumible`                        BIT                     NULL DEFAULT NULL,
    `producible`                        BIT                     NULL DEFAULT NULL,
    `comprable`                         BIT                     NULL DEFAULT NULL,
    `vendible`                          BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipos_materiales`               BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `materiales_costos_promedios` (
    `id_material_costo_promedio`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `costo_promedio`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `fecha_inicial`                     TIMESTAMP               NULL DEFAULT NULL,
    `fecha_final`                       TIMESTAMP               NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `materiales_descripciones` (
    `id_material_descripcion`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `cultura`                           VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_material`              VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `mm_codigo_equivalente` (
    `id_mm_codigo_equivalente`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `tipo_codigo_equivalente`           VARCHAR(255)            NULL DEFAULT NULL,
    `valor_codigo_equivalente`          VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `mm_tmc_caracteristica` (
    `id_mm_tmc_caracteristica`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_tipo_material_caracteristica`   BIGINT                  NULL DEFAULT NULL,
    `tipo_material`                     VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_tipo_material_caracteristica`  VARCHAR(255)    NULL DEFAULT NULL,
    `tipo_dato`                         INT                     NULL DEFAULT NULL,
    `regla_validacion`                  VARCHAR(255)            NULL DEFAULT NULL,
    `visible_detalle`                   BIT                     NULL DEFAULT NULL,
    `orden_detall`                      INT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_material`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `materiales_caracteristicas` (
    `id_material_caracteristica`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `valor_caracteristica`              VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_material_caracteristica`   BIGINT                  NULL DEFAULT NULL,
    `id_tipo_material`                  BIGINT                  NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `mm_tmcd_descripciones` (
    `id_mm_tmcd_descripciones`          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_tipo_material_caracteristica`   BIGINT                  NULL DEFAULT NULL,
    `cultura`                           VARCHAR(255)            NULL DEFAULT NULL,
    `descripcion_material`              VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_movimientos` (
    `id_tipo_movimiento`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_tipo_movimiento`       VARCHAR(255)            NULL DEFAULT NULL,
    `signo`                             BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_documentos` (
    `id_tipo_documento`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `descripcion_tipo_documento`        VARCHAR(255)            NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_movimiento`                BIGINT                  NULL DEFAULT NULL,
    `id_estado_remision`                BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `consecutivos` (
    `id_consecutivo`                    BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `resolucion`                        VARCHAR(255)            NULL DEFAULT NULL,
    `valor_inicial`                     INT                     NULL DEFAULT NULL,
    `valor_final`                       INT                     NULL DEFAULT NULL,
    `incremento`                        INT                     NULL DEFAULT NULL,
    `valor_actual`                      INT                     NULL DEFAULT NULL,
    `caracter_llenado`                  VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_inicial`                     TIMESTAMP               NULL DEFAULT NULL,
    `fecha_final`                       TIMESTAMP               NULL DEFAULT NULL,
    `sufijo`                            VARCHAR(255)            NULL DEFAULT NULL,
    `prefijo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `habilitado`                        BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `movimientos` (
    `id_movimiento`                     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_remision`                       BIGINT                  NULL DEFAULT NULL,
    `numero_documento`                  VARCHAR(255)            NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL,
    `id_tipo_movimiento`                BIGINT                  NULL DEFAULT NULL,
    `id_estado_movimiento`              BIGINT                  NULL DEFAULT NULL,
    `id_concepto`                       BIGINT                  NULL DEFAULT NULL,
    `fecha_creacion`                    TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `fecha_anulacion`                   TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01',
    `id_bodega`                         BIGINT                  NULL DEFAULT NULL,
    `sobre_costo`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `sobre_costo_aplicado_producto`     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT '1969-12-31 19:00:01'
);

CREATE TABLE IF NOT EXISTS `movimientos_detalles` (
    `id_movimiento_detalle`             BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_documento`                  VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_producto`                   VARCHAR(255)            NULL DEFAULT NULL,
    `valor_unitario`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `sobre_costo`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `cantidad`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    `id_estado_saldo`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `remisiones_compras` (
    `id_remision_compra`                BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_remision_compra`            VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_contabilizacion`             TIMESTAMP               NULL DEFAULT NULL,
    `fecha_validez`                     TIMESTAMP               NULL DEFAULT NULL,
    `fecha_documento`                   TIMESTAMP               NULL DEFAULT NULL,
    `fecha_necesaria`                   TIMESTAMP               NULL DEFAULT NULL,
    `numero_referencia`                 VARCHAR(255)            NULL DEFAULT NULL,
    `total_bruto`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentaje_descuento`              DOUBLE                  NULL DEFAULT NULL,
    `porcentaje_impuesto`               DOUBLE                  NULL DEFAULT NULL,
    `valor_total`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `comentarios`                       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL,
    `id_remision`                       BIGINT                  NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `remisiones_compras_materiales` (
    `id_remision_compra_material`       BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_remision_compra`            VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_necesaria`                   TIMESTAMP               NULL DEFAULT NULL,
    `fecha_solicitud`                   TIMESTAMP               NULL DEFAULT NULL,
    `cantidad`                          DOUBLE                  NULL DEFAULT NULL,
    `valor_unitario`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentaje_descuento`              FLOAT                   NULL DEFAULT NULL,
    `costo_promedio`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_remision_compra`                BIGINT                  NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `remisiones_venta` (
    `numero_documento`                  VARCHAR(255)        NOT NULL PRIMARY KEY,
    `fecha_contabilizacion`             TIMESTAMP               NULL DEFAULT NULL,
    `fecha_validez`                     TIMESTAMP               NULL DEFAULT NULL,
    `fecha_documento`                   TIMESTAMP               NULL DEFAULT NULL,
    `fecha_necesaria`                   TIMESTAMP               NULL DEFAULT NULL,
    `numero_referencia`                 VARCHAR(255)            NULL DEFAULT NULL,
    `total_bruto`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentaje_descuento`              DOUBLE                  NULL DEFAULT NULL,
    `porcentaje_impuesto`               DOUBLE                  NULL DEFAULT NULL,
    `valor_total`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `comentarios`                       VARCHAR(255)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL,
    `id_remision`                       BIGINT                  NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL,
    `lista_precio`                      BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_documentos_conceptos` (
    `id_tipo_documento_concepto`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL,
    `id_concepto`                       BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tipos_documentos_tipos_agentes` (
    `id_tipo_documento_tipo_agente`     BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_documento`                 BIGINT                  NULL DEFAULT NULL,
    `id_tipo_agente`                    BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `unidad_medida` (
    `id_unidad_medida`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre`                            VARCHAR(255)            NULL DEFAULT NULL,
    `simbolo`                           VARCHAR(255)            NULL DEFAULT NULL,
    `factor`                            FLOAT                   NULL DEFAULT NULL,
    `precision`                         FLOAT                   NULL DEFAULT NULL,
    `conversion`                        FLOAT                   NULL DEFAULT NULL,
    `decimales`                         INT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_tipo_unidad_medida`             BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `lista_de_materiales` (
    `id_lista_material`                 BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_unidad_medida`                  BIGINT                  NULL DEFAULT NULL,
    `id_tipo_lista_material`            BIGINT                  NULL DEFAULT NULL,
    `id_bodega`                         BIGINT                  NULL DEFAULT NULL,
    `fecha_inicio`                      DATETIME                NULL DEFAULT NULL,
    `fecha_fin`                         DATETIME                NULL DEFAULT NULL,
    `cantidad`                          INT                     NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_componente`                 VARCHAR(255)            NULL DEFAULT NULL,
    `id_lista_precio`                   BIGINT                  NULL DEFAULT NULL,
    `precio_unitario`                   DECIMAL(18, 1)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(100)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `materiales_datos_compra` (
    `id_material_dato_compra`           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_material_compra`            VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `automatic_purchase`                BIT                     NULL DEFAULT NULL,
    `gestion_lotes`                     BIT                     NULL DEFAULT NULL,
    `tolerancia_entrega_inferior`       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `tolerancia_entrega_superior`       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `dias_entrega`                      INT                     NULL DEFAULT NULL,
    `requiere_inspeccion`               BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL,
    `id_unidad_medida_base`             BIGINT                  NULL DEFAULT NULL,
    `id_unidad_medida_compra`           BIGINT                  NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL,
    `id_interlocutor`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `orden_produccion` (
    `numero_orden`                      VARCHAR(20)         NOT NULL PRIMARY KEY,
    `referencia`                        VARCHAR(20)             NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `id_estado_produccion`              BIGINT                  NULL DEFAULT NULL,
    `id_ruta_orden_trabajo`             BIGINT                  NULL DEFAULT NULL,
    `id_lista_materiales`               BIGINT                  NULL DEFAULT NULL,
    `id_unidad_medida`                  BIGINT                  NULL DEFAULT NULL,
    `id_centro_trabajo`                 BIGINT                  NULL DEFAULT NULL,
    `fecha_estimada`                    DATETIME                NULL DEFAULT NULL,
    `fecha_inicio_estimada`             DATETIME                NULL DEFAULT NULL,
    `fecha_finalizacion`                DATETIME                NULL DEFAULT NULL,
    `cantidad_planificada`              DECIMAL(18, 1)          NULL DEFAULT NULL,
    `origen_orden`                      VARCHAR(20)             NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `fecha`                             DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `componentes` (
    `id_componente`                     BIGINT              NOT NULL PRIMARY KEY,
    `numero_orden`                      VARCHAR(20)             NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `id_unidad_medida`                  BIGINT                  NULL DEFAULT NULL,
    `id_almacen`                        BIGINT                  NULL DEFAULT NULL,
    `cantidad_base`                     DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidad_requerida`                DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidad_adicional`                DECIMAL(18, 1)          NULL DEFAULT NULL,
    `cantidad_consumida`                DECIMAL(18, 1)          NULL DEFAULT NULL,
    `fecha_estimada`                    DATETIME                NULL DEFAULT NULL,
    `fecha_efectiva`                    DATETIME                NULL DEFAULT NULL,
    `fecha_inicio`                      DATETIME                NULL DEFAULT NULL,
    `fecha_final`                       DATETIME                NULL DEFAULT NULL,
    `id_estado_componente`              BIGINT                  NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `fecha`                             DATETIME                NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `orden_de_trabajo` (
    `id_orden_trabajo`                  BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_operacion`                      BIGINT                  NULL DEFAULT NULL,
    `id_centro_trabajo`                 BIGINT                  NULL DEFAULT NULL,
    `id_estado_o_t`                     BIGINT                  NULL DEFAULT NULL,
    `numero_orden`                      VARCHAR(20)             NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `remisiones_venta_materiales` (
    `id_remision_venta_material`        BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `numero_documento`                  VARCHAR(255)            NULL DEFAULT NULL,
    `codigo_material`                   VARCHAR(255)            NULL DEFAULT NULL,
    `fecha_necesaria`                   TIMESTAMP               NULL DEFAULT NULL,
    `fecha_solicitud`                   TIMESTAMP               NULL DEFAULT NULL,
    `cantidad`                          DOUBLE                  NULL DEFAULT NULL,
    `valor_unitario`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `porcentaje_descuento`              FLOAT                   NULL DEFAULT NULL,
    `costo_promedio`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `id_remision_compra`                BIGINT                  NULL DEFAULT NULL,
    `id_material`                       BIGINT                  NULL DEFAULT NULL,
    `id_unidad_medida`                  BIGINT                  NULL DEFAULT NULL,
    `cantidad_unidad_medida`            DECIMAL(18, 1)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `zonas` (
    `codigo_zona`                       VARCHAR(20)         NOT NULL PRIMARY KEY,
    `id_bodega`                         BIGINT                  NULL DEFAULT NULL,
    `descripcion_zona`                  VARCHAR(255)            NULL DEFAULT NULL,
    `transito_directo`                  BIT                     NULL DEFAULT NULL,
    `picking`                           BIT                     NULL DEFAULT NULL,
    `ubicacion`                         BIT                     NULL DEFAULT NULL,
    `despacho`                          BIT                     NULL DEFAULT NULL,
    `recepcion`                         BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `ubicaciones` (
    `id_ubicacion`                      BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codigo_ubicacion`                  VARCHAR(20)         NOT NULL,
    `codigo_zona`                       VARCHAR(20)             NULL DEFAULT NULL,
    `descripcion_ubicacion`             VARCHAR(255)            NULL DEFAULT NULL,
    `dedicado`                          BIT                     NULL DEFAULT NULL,
    `activo`                            BIT                     NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS `saldos` (
    `id_saldo`                          BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_estado_saldo`                   BIGINT                  NULL DEFAULT NULL,
    `id_ubicacion`                      BIGINT                  NULL DEFAULT NULL,
    `codigo_producto`                   VARCHAR(255)            NULL DEFAULT NULL,
    `cantidad`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `usuario`                           VARCHAR(255)            NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `grupo_interlocutores`
    ADD CONSTRAINT `fk_grupo_interlocutores_lista_precio_id`
        FOREIGN KEY (`id_lista_precio`)
        REFERENCES `listas_precios` (`id_lista_precio`);

ALTER TABLE `cotizacion`
    ADD CONSTRAINT `cotizacion_plan_compra_id_fk`
        FOREIGN KEY (`id_plan_compra`)
        REFERENCES `plan_compra` (`id_plan_compra`);

CREATE OR REPLACE INDEX `cotizacion_id_plan_compra_index`
        ON `cotizacion` (`id_plan_compra`);

CREATE OR REPLACE INDEX `cotizacion_materiales_id_fk`
        ON `cotizacion` (`codigo_material`);

CREATE OR REPLACE INDEX `plan_compra_material_index`
        ON `plan_compra` (`codigo_material`);

ALTER TABLE `interlocutores_comerciales`
    ADD CONSTRAINT `fk_interlocutores_comerciales_grupo_interlocutor_id`
        FOREIGN KEY (`id_grupo_interlocutor`)
        REFERENCES `grupo_interlocutores` (`id_grupo_interlocutor`),
    ADD CONSTRAINT `fk_interlocutores_comerciales_tipointerlocutor_id`
        FOREIGN KEY (`id_tipo_interlocutor`)
        REFERENCES `tipo_interlocutor_comercial` (`id_tipo_interlocutor_comercial`);

ALTER TABLE `interlocutor_finanzas`
    ADD CONSTRAINT `fk_interlocutores_comerciales_finanzas_interlocutor_id`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`);

ALTER TABLE `interlocutores_condicion_pago`
    ADD CONSTRAINT `fk_interlocutores_condicion_pago_condicion_pago_id`
        FOREIGN KEY (`id_condicion_pago`)
        REFERENCES `condiciones_pagos` (`id_condicion_pago`),
    ADD CONSTRAINT `fk_interlocutores_condicion_pago_lista_precio_id`
        FOREIGN KEY (`id_lista_precio`)
        REFERENCES `listas_precios` (`id_lista_precio`),
    ADD CONSTRAINT `fk_interlocutores_condicion_pago_interlocutor_id`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`);

ALTER TABLE `agentes`
    ADD CONSTRAINT `agentes_sociedad_id_fk`
        FOREIGN KEY (`id_sociedad`)
        REFERENCES `sociedad` (`id_sociedad`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `agentes_tipos_agentes_id_fk`
        FOREIGN KEY (`id_tipo_agente`)
        REFERENCES `tipos_agentes` (`id_tipo_agente`)
        ON UPDATE NO ACTION;

ALTER TABLE `bodegas`
    ADD CONSTRAINT `bodegas_codigo_bodega_uindex`
        UNIQUE (`codigo_bodega`),
    ADD CONSTRAINT `bodegas_agentes_id_fk`
        FOREIGN KEY (`id_agente`)
        REFERENCES `agentes` (`id_agente`)
        ON UPDATE NO ACTION;

ALTER TABLE `localizaciones`
    ADD CONSTRAINT `fk_localizaciones_interlocutor_id`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`),
    ADD CONSTRAINT `localizaciones_bodegas_id_fk`
        FOREIGN KEY (`id_bodega`)
        REFERENCES `bodegas` (`id_bodega`)
        ON UPDATE NO ACTION;

ALTER TABLE `remisiones`
    ADD CONSTRAINT `fk_remisiones_agentedestino_id`
        FOREIGN KEY (`id_agente_destino`)
        REFERENCES `agentes` (`id_agente`),
    ADD CONSTRAINT `fk_remisiones_agenteorigen_id`
        FOREIGN KEY (`id_agente_origen`)
        REFERENCES `agentes` (`id_agente`),
    ADD CONSTRAINT `fk_remisiones_estado_remision_id`
        FOREIGN KEY (`id_estado_remision`)
        REFERENCES `estados_remisiones` (`id_estado_remision`);

ALTER TABLE `materiales`
    ADD CONSTRAINT `materiales_codigo_producto_uindex`
        UNIQUE (`codigo_material`),
    ADD CONSTRAINT `materiales_tipos_materiales_id_tipo_material_fk`
        FOREIGN KEY (`id_tipos_materiales`)
        REFERENCES `tipos_materiales` (`id_tipo_material`)
        ON UPDATE NO ACTION;

ALTER TABLE `materiales_costos_promedios`
    ADD CONSTRAINT `materiales_costos_promedios_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION;

ALTER TABLE `materiales_descripciones`
    ADD CONSTRAINT `materiales_descripciones_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`);

CREATE OR REPLACE INDEX `materiales_descripciones_codigo_material_index`
        ON `materiales_descripciones` (`codigo_material`);

ALTER TABLE `mm_codigo_equivalente`
    ADD CONSTRAINT `mm_codigo_equivalente_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `mm_codigo_equivalente_codigo_material_index`
        ON `mm_codigo_equivalente` (`codigo_material`);

ALTER TABLE `mm_tmc_caracteristica`
    ADD CONSTRAINT `fk_tipos_materiales_caracteristicas_tipo_material_id`
        FOREIGN KEY (`id_tipo_material`)
        REFERENCES `tipos_materiales` (`id_tipo_material`);

ALTER TABLE `materiales_caracteristicas`
    ADD CONSTRAINT `materiales_caracteristicas_materiales_id_material_fk`
        FOREIGN KEY (`id_material`)
        REFERENCES `materiales` (`id_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materiales_caracteristicas_mm_tmc_caracteristica_fk`
        FOREIGN KEY (`id_tipo_material_caracteristica`)
        REFERENCES `mm_tmc_caracteristica` (`id_mm_tmc_caracteristica`)
        ON UPDATE NO ACTION;

ALTER TABLE `materiales_caracteristicas`
    ADD CONSTRAINT `materiales_caracteristicas_tipos_materiales_id_tipo_material_fk`
        FOREIGN KEY (`id_tipo_material`)
        REFERENCES `tipos_materiales` (`id_tipo_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materiales_caracteristicas_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `materiales_caracteristicas_id_tipo_material_caracteristica_index`
        ON `materiales_caracteristicas` (`id_tipo_material_caracteristica`);

CREATE OR REPLACE INDEX `materiales_caracteristicas_codigo_material_index`
        ON `materiales_caracteristicas` (`codigo_material`);

CREATE OR REPLACE INDEX `mm_tmc_caracteristica_id_tipo_material_caracteristica_index`
        ON `mm_tmc_caracteristica` (`id_tipo_material_caracteristica`);

ALTER TABLE `mm_tmcd_descripciones`
    ADD CONSTRAINT `mm_tmcd_tmc_fk`
        FOREIGN KEY (`id_tipo_material_caracteristica`)
        REFERENCES `mm_tmc_caracteristica` (`id_mm_tmc_caracteristica`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `mm_tmcd_descripciones_tipo_material_caracteristica_index`
        ON `mm_tmcd_descripciones` (`id_tipo_material_caracteristica`);

ALTER TABLE `tipos_documentos`
    ADD CONSTRAINT `fk_tipos_documentos_estado_remision_id`
        FOREIGN KEY (`id_estado_remision`)
        REFERENCES `estados_remisiones` (`id_estado_remision`),
    ADD CONSTRAINT `fk_tipos_documentos_tipo_movimiento_id1`
        FOREIGN KEY (`id_tipo_movimiento`)
        REFERENCES `tipos_movimientos` (`id_tipo_movimiento`),
    ADD CONSTRAINT `fk_tipos_documentos_tipomovimiento_id2`
        FOREIGN KEY (`id_tipo_movimiento`)
        REFERENCES `tipos_movimientos` (`id_tipo_movimiento`);

ALTER TABLE `consecutivos`
    ADD CONSTRAINT `consecutivos_tipos_documentos_id_fk`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`)
        ON UPDATE NO ACTION;

ALTER TABLE `movimientos`
    ADD CONSTRAINT `movimientos_numero_documento_uindex`
        UNIQUE (`numero_documento`),
    ADD CONSTRAINT `movimientos_bodegas_id_fk`
        FOREIGN KEY (`id_bodega`)
        REFERENCES `bodegas` (`id_bodega`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `movimientos_conceptos_id_fk`
        FOREIGN KEY (`id_concepto`)
        REFERENCES `conceptos` (`id_concepto`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `movimientos_estados_movimientos_id_fk`
        FOREIGN KEY (`id_estado_movimiento`)
        REFERENCES `estados_movimientos` (`id_estado_movimiento`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientos_remisiones_id_fk`
        FOREIGN KEY (`id_remision`)
        REFERENCES `remisiones` (`id_remision`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientos_tipos_documentos_id_fk`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    ADD CONSTRAINT `movimientos_tipos_movimientos_id_fk`
        FOREIGN KEY (`id_tipo_movimiento`)
        REFERENCES `tipos_movimientos` (`id_tipo_movimiento`)
        ON UPDATE NO ACTION;

ALTER TABLE `movimientos_detalles`
    ADD CONSTRAINT `movimientos_detalles_estados_saldos_id_fk`
        FOREIGN KEY (`id_estado_saldo`)
        REFERENCES `estados_saldos` (`id_estado_saldo`),
    ADD CONSTRAINT `movimientos_detalles_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_producto`)
        REFERENCES `materiales` (`codigo_material`),
    ADD CONSTRAINT `movimientos_detalles_movimientos_numero_documento_fk`
        FOREIGN KEY (`numero_documento`)
        REFERENCES `movimientos` (`numero_documento`);

ALTER TABLE `remisiones_compras`
    ADD CONSTRAINT `fk_remisiones_compras_tipo_documento_id`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`),
    ADD CONSTRAINT `fk_remisiones_compras_interlocutor_id`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`),
    ADD CONSTRAINT `fk_remisiones_compras_remision_id`
        FOREIGN KEY (`id_remision`)
        REFERENCES `remisiones` (`id_remision`);

ALTER TABLE `remisiones_compras_materiales`
    ADD CONSTRAINT `fk_remisiones_compras_materiales_material_id`
        FOREIGN KEY (`id_material`)
        REFERENCES `materiales` (`id_material`),
    ADD CONSTRAINT `fk_remisiones_compras_materiales_remision_compra_id`
        FOREIGN KEY (`id_remision_compra`)
        REFERENCES `remisiones_compras` (`id_remision_compra`);

ALTER TABLE `remisiones_venta`
    ADD CONSTRAINT `remisiones_venta_listas_precios_id_lista_precio_fk`
        FOREIGN KEY (`lista_precio`)
        REFERENCES `listas_precios` (`id_lista_precio`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_remisiones_venta_tipo_documento_id`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`),
    ADD CONSTRAINT `fk_remisiones_venta_interlocutor_id`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`),
    ADD CONSTRAINT `fk_remisiones_venta_remision_id`
        FOREIGN KEY (`id_remision`)
        REFERENCES `remisiones` (`id_remision`);

ALTER TABLE `tipos_documentos_conceptos`
    ADD CONSTRAINT `tipos_documentos_conceptos_conceptos_id_fk`
        FOREIGN KEY (`id_concepto`)
        REFERENCES `conceptos` (`id_concepto`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `tipos_documentos_conceptos_tipos_documentos_id_fk`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`)
        ON UPDATE NO ACTION;

ALTER TABLE `tipos_documentos_tipos_agentes`
    ADD CONSTRAINT `tipos_documentos_tipos_agentes_tipos_agentes_id_fk`
        FOREIGN KEY (`id_tipo_agente`)
        REFERENCES `tipos_agentes` (`id_tipo_agente`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `tipos_documentos_tipos_agentes_tipos_documentos_id_fk`
        FOREIGN KEY (`id_tipo_documento`)
        REFERENCES `tipos_documentos` (`id_tipo_documento`)
        ON UPDATE NO ACTION;

ALTER TABLE `unidad_medida`
    ADD CONSTRAINT `fk_unidad_medida_tipo_unidad_medida_id`
        FOREIGN KEY (`id_tipo_unidad_medida`)
        REFERENCES `tipo_unidad_medida` (`id_tipo_unidad_medida`);

ALTER TABLE `lista_de_materiales`
    ADD CONSTRAINT `lista_de_materiales_pk`
        UNIQUE (`id_lista_material`),
    ADD CONSTRAINT `lista_de_materiales_bodegas_id_bodega_fk`
        FOREIGN KEY (`id_bodega`)
        REFERENCES `bodegas` (`id_bodega`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `lista_de_materiales_listas_precios_id_lista_precio_fk`
        FOREIGN KEY (`id_lista_precio`)
        REFERENCES `listas_precios` (`id_lista_precio`),
    ADD CONSTRAINT `lista_de_materiales_materiales_codigo_material_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `lista_de_materiales_materiales_codigo_material_fk2`
        FOREIGN KEY (`codigo_componente`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `lista_de_materiales_id_tipo_lista_material_fk`
        FOREIGN KEY (`id_tipo_lista_material`)
        REFERENCES `tipo_lista_material` (`id_tipo_lista_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `lista_de_materiales_unidad_medida_id_unidad_medida_fk`
        FOREIGN KEY (`id_unidad_medida`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION;

ALTER TABLE `materiales_datos_compra`
    ADD CONSTRAINT `materiales_datos_compra_interlocutores_comerciales_fk`
        FOREIGN KEY (`id_interlocutor`)
        REFERENCES `interlocutores_comerciales` (`id_interlocutor_comercial`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materiales_datos_compra_unidad_medida_id_unidad_medida_fk`
        FOREIGN KEY (`id_unidad_medida_base`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materiales_datos_compra_unidad_medida_id_unidad_medida_fk2`
        FOREIGN KEY (`id_unidad_medida_compra`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `materiales_datos_compra_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION;

CREATE OR REPLACE INDEX `materiales_datos_compra_codigo_material_index`
        ON `materiales_datos_compra` (`codigo_material`);

ALTER TABLE `orden_produccion`
    ADD CONSTRAINT `orden_produccion_lista_de_materiales_id_lista_material_fk`
        FOREIGN KEY (`id_lista_materiales`)
        REFERENCES `lista_de_materiales` (`id_lista_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `orden_produccion_materiales_codigo_material_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `orden_produccion_unidad_medida_id_unidad_medida_fk`
        FOREIGN KEY (`id_unidad_medida`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION;

ALTER TABLE `componentes`
    ADD CONSTRAINT `componentes_materiales_codigo_material_fk`
        FOREIGN KEY (`codigo_material`)
        REFERENCES `materiales` (`codigo_material`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `componentes_orden_produccion_numero_orden_fk`
        FOREIGN KEY (`numero_orden`)
        REFERENCES `orden_produccion` (`numero_orden`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `componentes_unidad_medida_id_unidad_medida_fk`
        FOREIGN KEY (`id_unidad_medida`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION;

ALTER TABLE `orden_de_trabajo`
    ADD CONSTRAINT `orden_de_trabajo_centros_trabajos_id_centro_de_trabajo_fk`
        FOREIGN KEY (`id_centro_trabajo`)
        REFERENCES `centros_trabajos` (`id_centro_de_trabajo`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `orden_de_trabajo_orden_produccion_numero_orden_fk`
        FOREIGN KEY (`numero_orden`)
        REFERENCES `orden_produccion` (`numero_orden`)
        ON UPDATE NO ACTION;

ALTER TABLE `remisiones_venta_materiales`
    ADD CONSTRAINT `remisiones_venta_materiales_unidad_medida_id_unidad_medida_fk`
        FOREIGN KEY (`id_unidad_medida`)
        REFERENCES `unidad_medida` (`id_unidad_medida`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_remisiones_venta_materiales_material_id`
        FOREIGN KEY (`id_material`)
        REFERENCES `materiales` (`id_material`),
    ADD CONSTRAINT `fk_remisiones_venta_materiales_remision_compra_id`
        FOREIGN KEY (`numero_documento`)
        REFERENCES `remisiones_venta` (`numero_documento`);

ALTER TABLE `zonas`
    ADD CONSTRAINT `izonas_codigo_zona_uindex`
        UNIQUE (`codigo_zona`),
    ADD CONSTRAINT `zonas_bodegas_id_fk`
        FOREIGN KEY (`id_bodega`)
        REFERENCES `bodegas` (`id_bodega`)
        ON UPDATE NO ACTION;

ALTER TABLE `ubicaciones`
    ADD CONSTRAINT `ubicaciones_codigo_ubicacion_uindex`
        UNIQUE (`codigo_ubicacion`),
    ADD CONSTRAINT `ubicaciones_zonas_codigo_zona_fk`
        FOREIGN KEY (`codigo_zona`)
        REFERENCES `zonas` (`codigo_zona`)
        ON UPDATE NO ACTION;

ALTER TABLE `saldos`
    ADD CONSTRAINT `saldos_estados_saldos_id_fk`
        FOREIGN KEY (`id_estado_saldo`)
        REFERENCES `estados_saldos` (`id_estado_saldo`)
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `saldos_materiales_codigo_producto_fk`
        FOREIGN KEY (`codigo_producto`)
        REFERENCES `materiales` (`codigo_material`),
    ADD CONSTRAINT `saldos_ubicaciones_id_fk`
        FOREIGN KEY (`id_ubicacion`)
        REFERENCES `ubicaciones` (`id_ubicacion`)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;

CREATE OR REPLACE INDEX `saldos_codigo_producto_index`
        ON `saldos` (`codigo_producto`);
