/*
 * @fileoverview    {AlmacenModule}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { AgentesFacade } from './facade/agentes.facade';
import { AgentesService } from './service/agentes.service';
import { AgentesComponent } from './component/agentes/agentes.component';
import { AgentesContainerComponent } from './container/agentes-container/agentes-container.component';
import { AgentesViewComponent } from './view/agentes-view/agentes-view.component';
import { BodegasFacade } from './facade/bodegas.facade';
import { BodegasService } from './service/bodegas.service';
import { BodegasComponent } from './component/bodegas/bodegas.component';
import { BodegasContainerComponent } from './container/bodegas-container/bodegas-container.component';
import { BodegasViewComponent } from './view/bodegas-view/bodegas-view.component';
import { CentrosTrabajosFacade } from './facade/centros-trabajos.facade';
import { CentrosTrabajosService } from './service/centros-trabajos.service';
import { CentrosTrabajosComponent } from './component/centros-trabajos/centros-trabajos.component';
import { CentrosTrabajosContainerComponent } from './container/centros-trabajos-container/centros-trabajos-container.component';
import { CentrosTrabajosViewComponent } from './view/centros-trabajos-view/centros-trabajos-view.component';
import { ComponentesFacade } from './facade/componentes.facade';
import { ComponentesService } from './service/componentes.service';
import { ComponentesComponent } from './component/componentes/componentes.component';
import { ComponentesContainerComponent } from './container/componentes-container/componentes-container.component';
import { ComponentesViewComponent } from './view/componentes-view/componentes-view.component';
import { ConceptosFacade } from './facade/conceptos.facade';
import { ConceptosService } from './service/conceptos.service';
import { ConceptosComponent } from './component/conceptos/conceptos.component';
import { ConceptosContainerComponent } from './container/conceptos-container/conceptos-container.component';
import { ConceptosViewComponent } from './view/conceptos-view/conceptos-view.component';
import { CondicionesPagosFacade } from './facade/condiciones-pagos.facade';
import { CondicionesPagosService } from './service/condiciones-pagos.service';
import { CondicionesPagosComponent } from './component/condiciones-pagos/condiciones-pagos.component';
import { CondicionesPagosContainerComponent } from './container/condiciones-pagos-container/condiciones-pagos-container.component';
import { CondicionesPagosViewComponent } from './view/condiciones-pagos-view/condiciones-pagos-view.component';
import { ConsecutivosFacade } from './facade/consecutivos.facade';
import { ConsecutivosService } from './service/consecutivos.service';
import { ConsecutivosComponent } from './component/consecutivos/consecutivos.component';
import { ConsecutivosContainerComponent } from './container/consecutivos-container/consecutivos-container.component';
import { ConsecutivosViewComponent } from './view/consecutivos-view/consecutivos-view.component';
import { CotizacionFacade } from './facade/cotizacion.facade';
import { CotizacionService } from './service/cotizacion.service';
import { CotizacionComponent } from './component/cotizacion/cotizacion.component';
import { CotizacionContainerComponent } from './container/cotizacion-container/cotizacion-container.component';
import { CotizacionViewComponent } from './view/cotizacion-view/cotizacion-view.component';
import { EstadosMovimientosFacade } from './facade/estados-movimientos.facade';
import { EstadosMovimientosService } from './service/estados-movimientos.service';
import { EstadosMovimientosComponent } from './component/estados-movimientos/estados-movimientos.component';
import { EstadosMovimientosContainerComponent } from './container/estados-movimientos-container/estados-movimientos-container.component';
import { EstadosMovimientosViewComponent } from './view/estados-movimientos-view/estados-movimientos-view.component';
import { EstadosRemisionesFacade } from './facade/estados-remisiones.facade';
import { EstadosRemisionesService } from './service/estados-remisiones.service';
import { EstadosRemisionesComponent } from './component/estados-remisiones/estados-remisiones.component';
import { EstadosRemisionesContainerComponent } from './container/estados-remisiones-container/estados-remisiones-container.component';
import { EstadosRemisionesViewComponent } from './view/estados-remisiones-view/estados-remisiones-view.component';
import { EstadosSaldosFacade } from './facade/estados-saldos.facade';
import { EstadosSaldosService } from './service/estados-saldos.service';
import { EstadosSaldosComponent } from './component/estados-saldos/estados-saldos.component';
import { EstadosSaldosContainerComponent } from './container/estados-saldos-container/estados-saldos-container.component';
import { EstadosSaldosViewComponent } from './view/estados-saldos-view/estados-saldos-view.component';
import { GrupoInterlocutoresFacade } from './facade/grupo-interlocutores.facade';
import { GrupoInterlocutoresService } from './service/grupo-interlocutores.service';
import { GrupoInterlocutoresComponent } from './component/grupo-interlocutores/grupo-interlocutores.component';
import { GrupoInterlocutoresContainerComponent } from './container/grupo-interlocutores-container/grupo-interlocutores-container.component';
import { GrupoInterlocutoresViewComponent } from './view/grupo-interlocutores-view/grupo-interlocutores-view.component';
import { InterlocutorFinanzasFacade } from './facade/interlocutor-finanzas.facade';
import { InterlocutorFinanzasService } from './service/interlocutor-finanzas.service';
import { InterlocutorFinanzasComponent } from './component/interlocutor-finanzas/interlocutor-finanzas.component';
import { InterlocutorFinanzasContainerComponent } from './container/interlocutor-finanzas-container/interlocutor-finanzas-container.component';
import { InterlocutorFinanzasViewComponent } from './view/interlocutor-finanzas-view/interlocutor-finanzas-view.component';
import { InterlocutoresComercialesFacade } from './facade/interlocutores-comerciales.facade';
import { InterlocutoresComercialesService } from './service/interlocutores-comerciales.service';
import { InterlocutoresComercialesComponent } from './component/interlocutores-comerciales/interlocutores-comerciales.component';
import { InterlocutoresComercialesContainerComponent } from './container/interlocutores-comerciales-container/interlocutores-comerciales-container.component';
import { InterlocutoresComercialesViewComponent } from './view/interlocutores-comerciales-view/interlocutores-comerciales-view.component';
import { InterlocutoresCondicionPagoFacade } from './facade/interlocutores-condicion-pago.facade';
import { InterlocutoresCondicionPagoService } from './service/interlocutores-condicion-pago.service';
import { InterlocutoresCondicionPagoComponent } from './component/interlocutores-condicion-pago/interlocutores-condicion-pago.component';
import { InterlocutoresCondicionPagoContainerComponent } from './container/interlocutores-condicion-pago-container/interlocutores-condicion-pago-container.component';
import { InterlocutoresCondicionPagoViewComponent } from './view/interlocutores-condicion-pago-view/interlocutores-condicion-pago-view.component';
import { ListaDeMaterialesFacade } from './facade/lista-de-materiales.facade';
import { ListaDeMaterialesService } from './service/lista-de-materiales.service';
import { ListaDeMaterialesComponent } from './component/lista-de-materiales/lista-de-materiales.component';
import { ListaDeMaterialesContainerComponent } from './container/lista-de-materiales-container/lista-de-materiales-container.component';
import { ListaDeMaterialesViewComponent } from './view/lista-de-materiales-view/lista-de-materiales-view.component';
import { ListasPreciosFacade } from './facade/listas-precios.facade';
import { ListasPreciosService } from './service/listas-precios.service';
import { ListasPreciosComponent } from './component/listas-precios/listas-precios.component';
import { ListasPreciosContainerComponent } from './container/listas-precios-container/listas-precios-container.component';
import { ListasPreciosViewComponent } from './view/listas-precios-view/listas-precios-view.component';
import { ListasPreciosMaterialesFacade } from './facade/listas-precios-materiales.facade';
import { ListasPreciosMaterialesService } from './service/listas-precios-materiales.service';
import { ListasPreciosMaterialesComponent } from './component/listas-precios-materiales/listas-precios-materiales.component';
import { ListasPreciosMaterialesContainerComponent } from './container/listas-precios-materiales-container/listas-precios-materiales-container.component';
import { ListasPreciosMaterialesViewComponent } from './view/listas-precios-materiales-view/listas-precios-materiales-view.component';
import { LocalizacionesFacade } from './facade/localizaciones.facade';
import { LocalizacionesService } from './service/localizaciones.service';
import { LocalizacionesComponent } from './component/localizaciones/localizaciones.component';
import { LocalizacionesContainerComponent } from './container/localizaciones-container/localizaciones-container.component';
import { LocalizacionesViewComponent } from './view/localizaciones-view/localizaciones-view.component';
import { MaterialesFacade } from './facade/materiales.facade';
import { MaterialesService } from './service/materiales.service';
import { MaterialesComponent } from './component/materiales/materiales.component';
import { MaterialesContainerComponent } from './container/materiales-container/materiales-container.component';
import { MaterialesViewComponent } from './view/materiales-view/materiales-view.component';
import { MaterialesCaracteristicasFacade } from './facade/materiales-caracteristicas.facade';
import { MaterialesCaracteristicasService } from './service/materiales-caracteristicas.service';
import { MaterialesCaracteristicasComponent } from './component/materiales-caracteristicas/materiales-caracteristicas.component';
import { MaterialesCaracteristicasContainerComponent } from './container/materiales-caracteristicas-container/materiales-caracteristicas-container.component';
import { MaterialesCaracteristicasViewComponent } from './view/materiales-caracteristicas-view/materiales-caracteristicas-view.component';
import { MaterialesCostosPromediosFacade } from './facade/materiales-costos-promedios.facade';
import { MaterialesCostosPromediosService } from './service/materiales-costos-promedios.service';
import { MaterialesCostosPromediosComponent } from './component/materiales-costos-promedios/materiales-costos-promedios.component';
import { MaterialesCostosPromediosContainerComponent } from './container/materiales-costos-promedios-container/materiales-costos-promedios-container.component';
import { MaterialesCostosPromediosViewComponent } from './view/materiales-costos-promedios-view/materiales-costos-promedios-view.component';
import { MaterialesDatosCompraFacade } from './facade/materiales-datos-compra.facade';
import { MaterialesDatosCompraService } from './service/materiales-datos-compra.service';
import { MaterialesDatosCompraComponent } from './component/materiales-datos-compra/materiales-datos-compra.component';
import { MaterialesDatosCompraContainerComponent } from './container/materiales-datos-compra-container/materiales-datos-compra-container.component';
import { MaterialesDatosCompraViewComponent } from './view/materiales-datos-compra-view/materiales-datos-compra-view.component';
import { MaterialesDescripcionesFacade } from './facade/materiales-descripciones.facade';
import { MaterialesDescripcionesService } from './service/materiales-descripciones.service';
import { MaterialesDescripcionesComponent } from './component/materiales-descripciones/materiales-descripciones.component';
import { MaterialesDescripcionesContainerComponent } from './container/materiales-descripciones-container/materiales-descripciones-container.component';
import { MaterialesDescripcionesViewComponent } from './view/materiales-descripciones-view/materiales-descripciones-view.component';
import { MmCodigoEquivalenteFacade } from './facade/mm-codigo-equivalente.facade';
import { MmCodigoEquivalenteService } from './service/mm-codigo-equivalente.service';
import { MmCodigoEquivalenteComponent } from './component/mm-codigo-equivalente/mm-codigo-equivalente.component';
import { MmCodigoEquivalenteContainerComponent } from './container/mm-codigo-equivalente-container/mm-codigo-equivalente-container.component';
import { MmCodigoEquivalenteViewComponent } from './view/mm-codigo-equivalente-view/mm-codigo-equivalente-view.component';
import { MmTmcCaracteristicaFacade } from './facade/mm-tmc-caracteristica.facade';
import { MmTmcCaracteristicaService } from './service/mm-tmc-caracteristica.service';
import { MmTmcCaracteristicaComponent } from './component/mm-tmc-caracteristica/mm-tmc-caracteristica.component';
import { MmTmcCaracteristicaContainerComponent } from './container/mm-tmc-caracteristica-container/mm-tmc-caracteristica-container.component';
import { MmTmcCaracteristicaViewComponent } from './view/mm-tmc-caracteristica-view/mm-tmc-caracteristica-view.component';
import { MmTmcdDescripcionesFacade } from './facade/mm-tmcd-descripciones.facade';
import { MmTmcdDescripcionesService } from './service/mm-tmcd-descripciones.service';
import { MmTmcdDescripcionesComponent } from './component/mm-tmcd-descripciones/mm-tmcd-descripciones.component';
import { MmTmcdDescripcionesContainerComponent } from './container/mm-tmcd-descripciones-container/mm-tmcd-descripciones-container.component';
import { MmTmcdDescripcionesViewComponent } from './view/mm-tmcd-descripciones-view/mm-tmcd-descripciones-view.component';
import { MovimientosFacade } from './facade/movimientos.facade';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosComponent } from './component/movimientos/movimientos.component';
import { MovimientosContainerComponent } from './container/movimientos-container/movimientos-container.component';
import { MovimientosViewComponent } from './view/movimientos-view/movimientos-view.component';
import { MovimientosDetallesFacade } from './facade/movimientos-detalles.facade';
import { MovimientosDetallesService } from './service/movimientos-detalles.service';
import { MovimientosDetallesComponent } from './component/movimientos-detalles/movimientos-detalles.component';
import { MovimientosDetallesContainerComponent } from './container/movimientos-detalles-container/movimientos-detalles-container.component';
import { MovimientosDetallesViewComponent } from './view/movimientos-detalles-view/movimientos-detalles-view.component';
import { OrdenDeTrabajoFacade } from './facade/orden-de-trabajo.facade';
import { OrdenDeTrabajoService } from './service/orden-de-trabajo.service';
import { OrdenDeTrabajoComponent } from './component/orden-de-trabajo/orden-de-trabajo.component';
import { OrdenDeTrabajoContainerComponent } from './container/orden-de-trabajo-container/orden-de-trabajo-container.component';
import { OrdenDeTrabajoViewComponent } from './view/orden-de-trabajo-view/orden-de-trabajo-view.component';
import { OrdenProduccionFacade } from './facade/orden-produccion.facade';
import { OrdenProduccionService } from './service/orden-produccion.service';
import { OrdenProduccionComponent } from './component/orden-produccion/orden-produccion.component';
import { OrdenProduccionContainerComponent } from './container/orden-produccion-container/orden-produccion-container.component';
import { OrdenProduccionViewComponent } from './view/orden-produccion-view/orden-produccion-view.component';
import { PlanCompraFacade } from './facade/plan-compra.facade';
import { PlanCompraService } from './service/plan-compra.service';
import { PlanCompraComponent } from './component/plan-compra/plan-compra.component';
import { PlanCompraContainerComponent } from './container/plan-compra-container/plan-compra-container.component';
import { PlanCompraViewComponent } from './view/plan-compra-view/plan-compra-view.component';
import { RemisionesFacade } from './facade/remisiones.facade';
import { RemisionesService } from './service/remisiones.service';
import { RemisionesComponent } from './component/remisiones/remisiones.component';
import { RemisionesContainerComponent } from './container/remisiones-container/remisiones-container.component';
import { RemisionesViewComponent } from './view/remisiones-view/remisiones-view.component';
import { RemisionesComprasFacade } from './facade/remisiones-compras.facade';
import { RemisionesComprasService } from './service/remisiones-compras.service';
import { RemisionesComprasComponent } from './component/remisiones-compras/remisiones-compras.component';
import { RemisionesComprasContainerComponent } from './container/remisiones-compras-container/remisiones-compras-container.component';
import { RemisionesComprasViewComponent } from './view/remisiones-compras-view/remisiones-compras-view.component';
import { RemisionesComprasMaterialesFacade } from './facade/remisiones-compras-materiales.facade';
import { RemisionesComprasMaterialesService } from './service/remisiones-compras-materiales.service';
import { RemisionesComprasMaterialesComponent } from './component/remisiones-compras-materiales/remisiones-compras-materiales.component';
import { RemisionesComprasMaterialesContainerComponent } from './container/remisiones-compras-materiales-container/remisiones-compras-materiales-container.component';
import { RemisionesComprasMaterialesViewComponent } from './view/remisiones-compras-materiales-view/remisiones-compras-materiales-view.component';
import { RemisionesVentaFacade } from './facade/remisiones-venta.facade';
import { RemisionesVentaService } from './service/remisiones-venta.service';
import { RemisionesVentaComponent } from './component/remisiones-venta/remisiones-venta.component';
import { RemisionesVentaContainerComponent } from './container/remisiones-venta-container/remisiones-venta-container.component';
import { RemisionesVentaViewComponent } from './view/remisiones-venta-view/remisiones-venta-view.component';
import { RemisionesVentaMaterialesFacade } from './facade/remisiones-venta-materiales.facade';
import { RemisionesVentaMaterialesService } from './service/remisiones-venta-materiales.service';
import { RemisionesVentaMaterialesComponent } from './component/remisiones-venta-materiales/remisiones-venta-materiales.component';
import { RemisionesVentaMaterialesContainerComponent } from './container/remisiones-venta-materiales-container/remisiones-venta-materiales-container.component';
import { RemisionesVentaMaterialesViewComponent } from './view/remisiones-venta-materiales-view/remisiones-venta-materiales-view.component';
import { SaldosFacade } from './facade/saldos.facade';
import { SaldosService } from './service/saldos.service';
import { SaldosComponent } from './component/saldos/saldos.component';
import { SaldosContainerComponent } from './container/saldos-container/saldos-container.component';
import { SaldosViewComponent } from './view/saldos-view/saldos-view.component';
import { SociedadFacade } from './facade/sociedad.facade';
import { SociedadService } from './service/sociedad.service';
import { SociedadComponent } from './component/sociedad/sociedad.component';
import { SociedadContainerComponent } from './container/sociedad-container/sociedad-container.component';
import { SociedadViewComponent } from './view/sociedad-view/sociedad-view.component';
import { TipoInterlocutorComercialFacade } from './facade/tipo-interlocutor-comercial.facade';
import { TipoInterlocutorComercialService } from './service/tipo-interlocutor-comercial.service';
import { TipoInterlocutorComercialComponent } from './component/tipo-interlocutor-comercial/tipo-interlocutor-comercial.component';
import { TipoInterlocutorComercialContainerComponent } from './container/tipo-interlocutor-comercial-container/tipo-interlocutor-comercial-container.component';
import { TipoInterlocutorComercialViewComponent } from './view/tipo-interlocutor-comercial-view/tipo-interlocutor-comercial-view.component';
import { TipoListaMaterialFacade } from './facade/tipo-lista-material.facade';
import { TipoListaMaterialService } from './service/tipo-lista-material.service';
import { TipoListaMaterialComponent } from './component/tipo-lista-material/tipo-lista-material.component';
import { TipoListaMaterialContainerComponent } from './container/tipo-lista-material-container/tipo-lista-material-container.component';
import { TipoListaMaterialViewComponent } from './view/tipo-lista-material-view/tipo-lista-material-view.component';
import { TipoUnidadMedidaFacade } from './facade/tipo-unidad-medida.facade';
import { TipoUnidadMedidaService } from './service/tipo-unidad-medida.service';
import { TipoUnidadMedidaComponent } from './component/tipo-unidad-medida/tipo-unidad-medida.component';
import { TipoUnidadMedidaContainerComponent } from './container/tipo-unidad-medida-container/tipo-unidad-medida-container.component';
import { TipoUnidadMedidaViewComponent } from './view/tipo-unidad-medida-view/tipo-unidad-medida-view.component';
import { TiposAgentesFacade } from './facade/tipos-agentes.facade';
import { TiposAgentesService } from './service/tipos-agentes.service';
import { TiposAgentesComponent } from './component/tipos-agentes/tipos-agentes.component';
import { TiposAgentesContainerComponent } from './container/tipos-agentes-container/tipos-agentes-container.component';
import { TiposAgentesViewComponent } from './view/tipos-agentes-view/tipos-agentes-view.component';
import { TiposDocumentosFacade } from './facade/tipos-documentos.facade';
import { TiposDocumentosService } from './service/tipos-documentos.service';
import { TiposDocumentosComponent } from './component/tipos-documentos/tipos-documentos.component';
import { TiposDocumentosContainerComponent } from './container/tipos-documentos-container/tipos-documentos-container.component';
import { TiposDocumentosViewComponent } from './view/tipos-documentos-view/tipos-documentos-view.component';
import { TiposDocumentosConceptosFacade } from './facade/tipos-documentos-conceptos.facade';
import { TiposDocumentosConceptosService } from './service/tipos-documentos-conceptos.service';
import { TiposDocumentosConceptosComponent } from './component/tipos-documentos-conceptos/tipos-documentos-conceptos.component';
import { TiposDocumentosConceptosContainerComponent } from './container/tipos-documentos-conceptos-container/tipos-documentos-conceptos-container.component';
import { TiposDocumentosConceptosViewComponent } from './view/tipos-documentos-conceptos-view/tipos-documentos-conceptos-view.component';
import { TiposDocumentosTiposAgentesFacade } from './facade/tipos-documentos-tipos-agentes.facade';
import { TiposDocumentosTiposAgentesService } from './service/tipos-documentos-tipos-agentes.service';
import { TiposDocumentosTiposAgentesComponent } from './component/tipos-documentos-tipos-agentes/tipos-documentos-tipos-agentes.component';
import { TiposDocumentosTiposAgentesContainerComponent } from './container/tipos-documentos-tipos-agentes-container/tipos-documentos-tipos-agentes-container.component';
import { TiposDocumentosTiposAgentesViewComponent } from './view/tipos-documentos-tipos-agentes-view/tipos-documentos-tipos-agentes-view.component';
import { TiposMaterialesFacade } from './facade/tipos-materiales.facade';
import { TiposMaterialesService } from './service/tipos-materiales.service';
import { TiposMaterialesComponent } from './component/tipos-materiales/tipos-materiales.component';
import { TiposMaterialesContainerComponent } from './container/tipos-materiales-container/tipos-materiales-container.component';
import { TiposMaterialesViewComponent } from './view/tipos-materiales-view/tipos-materiales-view.component';
import { TiposMovimientosFacade } from './facade/tipos-movimientos.facade';
import { TiposMovimientosService } from './service/tipos-movimientos.service';
import { TiposMovimientosComponent } from './component/tipos-movimientos/tipos-movimientos.component';
import { TiposMovimientosContainerComponent } from './container/tipos-movimientos-container/tipos-movimientos-container.component';
import { TiposMovimientosViewComponent } from './view/tipos-movimientos-view/tipos-movimientos-view.component';
import { UbicacionesFacade } from './facade/ubicaciones.facade';
import { UbicacionesService } from './service/ubicaciones.service';
import { UbicacionesComponent } from './component/ubicaciones/ubicaciones.component';
import { UbicacionesContainerComponent } from './container/ubicaciones-container/ubicaciones-container.component';
import { UbicacionesViewComponent } from './view/ubicaciones-view/ubicaciones-view.component';
import { UnidadMedidaFacade } from './facade/unidad-medida.facade';
import { UnidadMedidaService } from './service/unidad-medida.service';
import { UnidadMedidaComponent } from './component/unidad-medida/unidad-medida.component';
import { UnidadMedidaContainerComponent } from './container/unidad-medida-container/unidad-medida-container.component';
import { UnidadMedidaViewComponent } from './view/unidad-medida-view/unidad-medida-view.component';
import { ZonasFacade } from './facade/zonas.facade';
import { ZonasService } from './service/zonas.service';
import { ZonasComponent } from './component/zonas/zonas.component';
import { ZonasContainerComponent } from './container/zonas-container/zonas-container.component';
import { ZonasViewComponent } from './view/zonas-view/zonas-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { AlmacenRoutingModule } from '@app/module/almacen/almacen.routing.module';

/**
 * TODO: Description of {@code AlmacenModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        AgentesComponent,
        AgentesContainerComponent,
        AgentesViewComponent,        BodegasComponent,
        BodegasContainerComponent,
        BodegasViewComponent,        CentrosTrabajosComponent,
        CentrosTrabajosContainerComponent,
        CentrosTrabajosViewComponent,        ComponentesComponent,
        ComponentesContainerComponent,
        ComponentesViewComponent,        ConceptosComponent,
        ConceptosContainerComponent,
        ConceptosViewComponent,        CondicionesPagosComponent,
        CondicionesPagosContainerComponent,
        CondicionesPagosViewComponent,        ConsecutivosComponent,
        ConsecutivosContainerComponent,
        ConsecutivosViewComponent,        CotizacionComponent,
        CotizacionContainerComponent,
        CotizacionViewComponent,        EstadosMovimientosComponent,
        EstadosMovimientosContainerComponent,
        EstadosMovimientosViewComponent,        EstadosRemisionesComponent,
        EstadosRemisionesContainerComponent,
        EstadosRemisionesViewComponent,        EstadosSaldosComponent,
        EstadosSaldosContainerComponent,
        EstadosSaldosViewComponent,        GrupoInterlocutoresComponent,
        GrupoInterlocutoresContainerComponent,
        GrupoInterlocutoresViewComponent,        InterlocutorFinanzasComponent,
        InterlocutorFinanzasContainerComponent,
        InterlocutorFinanzasViewComponent,        InterlocutoresComercialesComponent,
        InterlocutoresComercialesContainerComponent,
        InterlocutoresComercialesViewComponent,        InterlocutoresCondicionPagoComponent,
        InterlocutoresCondicionPagoContainerComponent,
        InterlocutoresCondicionPagoViewComponent,        ListaDeMaterialesComponent,
        ListaDeMaterialesContainerComponent,
        ListaDeMaterialesViewComponent,        ListasPreciosComponent,
        ListasPreciosContainerComponent,
        ListasPreciosViewComponent,        ListasPreciosMaterialesComponent,
        ListasPreciosMaterialesContainerComponent,
        ListasPreciosMaterialesViewComponent,        LocalizacionesComponent,
        LocalizacionesContainerComponent,
        LocalizacionesViewComponent,        MaterialesComponent,
        MaterialesContainerComponent,
        MaterialesViewComponent,        MaterialesCaracteristicasComponent,
        MaterialesCaracteristicasContainerComponent,
        MaterialesCaracteristicasViewComponent,        MaterialesCostosPromediosComponent,
        MaterialesCostosPromediosContainerComponent,
        MaterialesCostosPromediosViewComponent,        MaterialesDatosCompraComponent,
        MaterialesDatosCompraContainerComponent,
        MaterialesDatosCompraViewComponent,        MaterialesDescripcionesComponent,
        MaterialesDescripcionesContainerComponent,
        MaterialesDescripcionesViewComponent,        MmCodigoEquivalenteComponent,
        MmCodigoEquivalenteContainerComponent,
        MmCodigoEquivalenteViewComponent,        MmTmcCaracteristicaComponent,
        MmTmcCaracteristicaContainerComponent,
        MmTmcCaracteristicaViewComponent,        MmTmcdDescripcionesComponent,
        MmTmcdDescripcionesContainerComponent,
        MmTmcdDescripcionesViewComponent,        MovimientosComponent,
        MovimientosContainerComponent,
        MovimientosViewComponent,        MovimientosDetallesComponent,
        MovimientosDetallesContainerComponent,
        MovimientosDetallesViewComponent,        OrdenDeTrabajoComponent,
        OrdenDeTrabajoContainerComponent,
        OrdenDeTrabajoViewComponent,        OrdenProduccionComponent,
        OrdenProduccionContainerComponent,
        OrdenProduccionViewComponent,        PlanCompraComponent,
        PlanCompraContainerComponent,
        PlanCompraViewComponent,        RemisionesComponent,
        RemisionesContainerComponent,
        RemisionesViewComponent,        RemisionesComprasComponent,
        RemisionesComprasContainerComponent,
        RemisionesComprasViewComponent,        RemisionesComprasMaterialesComponent,
        RemisionesComprasMaterialesContainerComponent,
        RemisionesComprasMaterialesViewComponent,        RemisionesVentaComponent,
        RemisionesVentaContainerComponent,
        RemisionesVentaViewComponent,        RemisionesVentaMaterialesComponent,
        RemisionesVentaMaterialesContainerComponent,
        RemisionesVentaMaterialesViewComponent,        SaldosComponent,
        SaldosContainerComponent,
        SaldosViewComponent,        SociedadComponent,
        SociedadContainerComponent,
        SociedadViewComponent,        TipoInterlocutorComercialComponent,
        TipoInterlocutorComercialContainerComponent,
        TipoInterlocutorComercialViewComponent,        TipoListaMaterialComponent,
        TipoListaMaterialContainerComponent,
        TipoListaMaterialViewComponent,        TipoUnidadMedidaComponent,
        TipoUnidadMedidaContainerComponent,
        TipoUnidadMedidaViewComponent,        TiposAgentesComponent,
        TiposAgentesContainerComponent,
        TiposAgentesViewComponent,        TiposDocumentosComponent,
        TiposDocumentosContainerComponent,
        TiposDocumentosViewComponent,        TiposDocumentosConceptosComponent,
        TiposDocumentosConceptosContainerComponent,
        TiposDocumentosConceptosViewComponent,        TiposDocumentosTiposAgentesComponent,
        TiposDocumentosTiposAgentesContainerComponent,
        TiposDocumentosTiposAgentesViewComponent,        TiposMaterialesComponent,
        TiposMaterialesContainerComponent,
        TiposMaterialesViewComponent,        TiposMovimientosComponent,
        TiposMovimientosContainerComponent,
        TiposMovimientosViewComponent,        UbicacionesComponent,
        UbicacionesContainerComponent,
        UbicacionesViewComponent,        UnidadMedidaComponent,
        UnidadMedidaContainerComponent,
        UnidadMedidaViewComponent,        ZonasComponent,
        ZonasContainerComponent,
        ZonasViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        AlmacenRoutingModule,
        SharedModule
    ],
    exports: [
        AgentesViewComponent,        BodegasViewComponent,        CentrosTrabajosViewComponent,        ComponentesViewComponent,        ConceptosViewComponent,        CondicionesPagosViewComponent,        ConsecutivosViewComponent,        CotizacionViewComponent,        EstadosMovimientosViewComponent,        EstadosRemisionesViewComponent,        EstadosSaldosViewComponent,        GrupoInterlocutoresViewComponent,        InterlocutorFinanzasViewComponent,        InterlocutoresComercialesViewComponent,        InterlocutoresCondicionPagoViewComponent,        ListaDeMaterialesViewComponent,        ListasPreciosViewComponent,        ListasPreciosMaterialesViewComponent,        LocalizacionesViewComponent,        MaterialesViewComponent,        MaterialesCaracteristicasViewComponent,        MaterialesCostosPromediosViewComponent,        MaterialesDatosCompraViewComponent,        MaterialesDescripcionesViewComponent,        MmCodigoEquivalenteViewComponent,        MmTmcCaracteristicaViewComponent,        MmTmcdDescripcionesViewComponent,        MovimientosViewComponent,        MovimientosDetallesViewComponent,        OrdenDeTrabajoViewComponent,        OrdenProduccionViewComponent,        PlanCompraViewComponent,        RemisionesViewComponent,        RemisionesComprasViewComponent,        RemisionesComprasMaterialesViewComponent,        RemisionesVentaViewComponent,        RemisionesVentaMaterialesViewComponent,        SaldosViewComponent,        SociedadViewComponent,        TipoInterlocutorComercialViewComponent,        TipoListaMaterialViewComponent,        TipoUnidadMedidaViewComponent,        TiposAgentesViewComponent,        TiposDocumentosViewComponent,        TiposDocumentosConceptosViewComponent,        TiposDocumentosTiposAgentesViewComponent,        TiposMaterialesViewComponent,        TiposMovimientosViewComponent,        UbicacionesViewComponent,        UnidadMedidaViewComponent,        ZonasViewComponent,
    ],
    providers: [
        AgentesFacade,
        AgentesService,        BodegasFacade,
        BodegasService,        CentrosTrabajosFacade,
        CentrosTrabajosService,        ComponentesFacade,
        ComponentesService,        ConceptosFacade,
        ConceptosService,        CondicionesPagosFacade,
        CondicionesPagosService,        ConsecutivosFacade,
        ConsecutivosService,        CotizacionFacade,
        CotizacionService,        EstadosMovimientosFacade,
        EstadosMovimientosService,        EstadosRemisionesFacade,
        EstadosRemisionesService,        EstadosSaldosFacade,
        EstadosSaldosService,        GrupoInterlocutoresFacade,
        GrupoInterlocutoresService,        InterlocutorFinanzasFacade,
        InterlocutorFinanzasService,        InterlocutoresComercialesFacade,
        InterlocutoresComercialesService,        InterlocutoresCondicionPagoFacade,
        InterlocutoresCondicionPagoService,        ListaDeMaterialesFacade,
        ListaDeMaterialesService,        ListasPreciosFacade,
        ListasPreciosService,        ListasPreciosMaterialesFacade,
        ListasPreciosMaterialesService,        LocalizacionesFacade,
        LocalizacionesService,        MaterialesFacade,
        MaterialesService,        MaterialesCaracteristicasFacade,
        MaterialesCaracteristicasService,        MaterialesCostosPromediosFacade,
        MaterialesCostosPromediosService,        MaterialesDatosCompraFacade,
        MaterialesDatosCompraService,        MaterialesDescripcionesFacade,
        MaterialesDescripcionesService,        MmCodigoEquivalenteFacade,
        MmCodigoEquivalenteService,        MmTmcCaracteristicaFacade,
        MmTmcCaracteristicaService,        MmTmcdDescripcionesFacade,
        MmTmcdDescripcionesService,        MovimientosFacade,
        MovimientosService,        MovimientosDetallesFacade,
        MovimientosDetallesService,        OrdenDeTrabajoFacade,
        OrdenDeTrabajoService,        OrdenProduccionFacade,
        OrdenProduccionService,        PlanCompraFacade,
        PlanCompraService,        RemisionesFacade,
        RemisionesService,        RemisionesComprasFacade,
        RemisionesComprasService,        RemisionesComprasMaterialesFacade,
        RemisionesComprasMaterialesService,        RemisionesVentaFacade,
        RemisionesVentaService,        RemisionesVentaMaterialesFacade,
        RemisionesVentaMaterialesService,        SaldosFacade,
        SaldosService,        SociedadFacade,
        SociedadService,        TipoInterlocutorComercialFacade,
        TipoInterlocutorComercialService,        TipoListaMaterialFacade,
        TipoListaMaterialService,        TipoUnidadMedidaFacade,
        TipoUnidadMedidaService,        TiposAgentesFacade,
        TiposAgentesService,        TiposDocumentosFacade,
        TiposDocumentosService,        TiposDocumentosConceptosFacade,
        TiposDocumentosConceptosService,        TiposDocumentosTiposAgentesFacade,
        TiposDocumentosTiposAgentesService,        TiposMaterialesFacade,
        TiposMaterialesService,        TiposMovimientosFacade,
        TiposMovimientosService,        UbicacionesFacade,
        UbicacionesService,        UnidadMedidaFacade,
        UnidadMedidaService,        ZonasFacade,
        ZonasService,
    ]
})
export class AlmacenModule { }
