/*
 * @overview        {AlmacenRoutingModule}
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
import { RouterModule, Routes } from '@angular/router';

import { AgentesViewComponent } from './view/agentes-view/agentes-view.component';
import { BodegasViewComponent } from './view/bodegas-view/bodegas-view.component';
import { CentrosTrabajosViewComponent } from './view/centros-trabajos-view/centros-trabajos-view.component';
import { ComponentesViewComponent } from './view/componentes-view/componentes-view.component';
import { ConceptosViewComponent } from './view/conceptos-view/conceptos-view.component';
import { CondicionesPagosViewComponent } from './view/condiciones-pagos-view/condiciones-pagos-view.component';
import { ConsecutivosViewComponent } from './view/consecutivos-view/consecutivos-view.component';
import { CotizacionViewComponent } from './view/cotizacion-view/cotizacion-view.component';
import { EstadosMovimientosViewComponent } from './view/estados-movimientos-view/estados-movimientos-view.component';
import { EstadosRemisionesViewComponent } from './view/estados-remisiones-view/estados-remisiones-view.component';
import { EstadosSaldosViewComponent } from './view/estados-saldos-view/estados-saldos-view.component';
import { GrupoInterlocutoresViewComponent } from './view/grupo-interlocutores-view/grupo-interlocutores-view.component';
import { InterlocutorFinanzasViewComponent } from './view/interlocutor-finanzas-view/interlocutor-finanzas-view.component';
import { InterlocutoresComercialesViewComponent } from './view/interlocutores-comerciales-view/interlocutores-comerciales-view.component';
import { InterlocutoresCondicionPagoViewComponent } from './view/interlocutores-condicion-pago-view/interlocutores-condicion-pago-view.component';
import { ListaDeMaterialesViewComponent } from './view/lista-de-materiales-view/lista-de-materiales-view.component';
import { ListasPreciosViewComponent } from './view/listas-precios-view/listas-precios-view.component';
import { ListasPreciosMaterialesViewComponent } from './view/listas-precios-materiales-view/listas-precios-materiales-view.component';
import { LocalizacionesViewComponent } from './view/localizaciones-view/localizaciones-view.component';
import { MaterialesViewComponent } from './view/materiales-view/materiales-view.component';
import { MaterialesCaracteristicasViewComponent } from './view/materiales-caracteristicas-view/materiales-caracteristicas-view.component';
import { MaterialesCostosPromediosViewComponent } from './view/materiales-costos-promedios-view/materiales-costos-promedios-view.component';
import { MaterialesDatosCompraViewComponent } from './view/materiales-datos-compra-view/materiales-datos-compra-view.component';
import { MaterialesDescripcionesViewComponent } from './view/materiales-descripciones-view/materiales-descripciones-view.component';
import { MmCodigoEquivalenteViewComponent } from './view/mm-codigo-equivalente-view/mm-codigo-equivalente-view.component';
import { MmTmcCaracteristicaViewComponent } from './view/mm-tmc-caracteristica-view/mm-tmc-caracteristica-view.component';
import { MmTmcdDescripcionesViewComponent } from './view/mm-tmcd-descripciones-view/mm-tmcd-descripciones-view.component';
import { MovimientosViewComponent } from './view/movimientos-view/movimientos-view.component';
import { MovimientosDetallesViewComponent } from './view/movimientos-detalles-view/movimientos-detalles-view.component';
import { OrdenDeTrabajoViewComponent } from './view/orden-de-trabajo-view/orden-de-trabajo-view.component';
import { OrdenProduccionViewComponent } from './view/orden-produccion-view/orden-produccion-view.component';
import { PlanCompraViewComponent } from './view/plan-compra-view/plan-compra-view.component';
import { RemisionesViewComponent } from './view/remisiones-view/remisiones-view.component';
import { RemisionesComprasViewComponent } from './view/remisiones-compras-view/remisiones-compras-view.component';
import { RemisionesComprasMaterialesViewComponent } from './view/remisiones-compras-materiales-view/remisiones-compras-materiales-view.component';
import { RemisionesVentaViewComponent } from './view/remisiones-venta-view/remisiones-venta-view.component';
import { RemisionesVentaMaterialesViewComponent } from './view/remisiones-venta-materiales-view/remisiones-venta-materiales-view.component';
import { SaldosViewComponent } from './view/saldos-view/saldos-view.component';
import { SociedadViewComponent } from './view/sociedad-view/sociedad-view.component';
import { TipoInterlocutorComercialViewComponent } from './view/tipo-interlocutor-comercial-view/tipo-interlocutor-comercial-view.component';
import { TipoListaMaterialViewComponent } from './view/tipo-lista-material-view/tipo-lista-material-view.component';
import { TipoUnidadMedidaViewComponent } from './view/tipo-unidad-medida-view/tipo-unidad-medida-view.component';
import { TiposAgentesViewComponent } from './view/tipos-agentes-view/tipos-agentes-view.component';
import { TiposDocumentosViewComponent } from './view/tipos-documentos-view/tipos-documentos-view.component';
import { TiposDocumentosConceptosViewComponent } from './view/tipos-documentos-conceptos-view/tipos-documentos-conceptos-view.component';
import { TiposDocumentosTiposAgentesViewComponent } from './view/tipos-documentos-tipos-agentes-view/tipos-documentos-tipos-agentes-view.component';
import { TiposMaterialesViewComponent } from './view/tipos-materiales-view/tipos-materiales-view.component';
import { TiposMovimientosViewComponent } from './view/tipos-movimientos-view/tipos-movimientos-view.component';
import { UbicacionesViewComponent } from './view/ubicaciones-view/ubicaciones-view.component';
import { UnidadMedidaViewComponent } from './view/unidad-medida-view/unidad-medida-view.component';
import { ZonasViewComponent } from './view/zonas-view/zonas-view.component';

const routes: Routes = [
    {
        path: 'agentes',
        component: AgentesViewComponent
    },
    {
        path: 'bodegas',
        component: BodegasViewComponent
    },
    {
        path: 'centros-trabajos',
        component: CentrosTrabajosViewComponent
    },
    {
        path: 'componentes',
        component: ComponentesViewComponent
    },
    {
        path: 'conceptos',
        component: ConceptosViewComponent
    },
    {
        path: 'condiciones-pagos',
        component: CondicionesPagosViewComponent
    },
    {
        path: 'consecutivos',
        component: ConsecutivosViewComponent
    },
    {
        path: 'cotizacion',
        component: CotizacionViewComponent
    },
    {
        path: 'estados-movimientos',
        component: EstadosMovimientosViewComponent
    },
    {
        path: 'estados-remisiones',
        component: EstadosRemisionesViewComponent
    },
    {
        path: 'estados-saldos',
        component: EstadosSaldosViewComponent
    },
    {
        path: 'grupo-interlocutores',
        component: GrupoInterlocutoresViewComponent
    },
    {
        path: 'interlocutor-finanzas',
        component: InterlocutorFinanzasViewComponent
    },
    {
        path: 'interlocutores-comerciales',
        component: InterlocutoresComercialesViewComponent
    },
    {
        path: 'interlocutores-condicion-pago',
        component: InterlocutoresCondicionPagoViewComponent
    },
    {
        path: 'lista-de-materiales',
        component: ListaDeMaterialesViewComponent
    },
    {
        path: 'listas-precios',
        component: ListasPreciosViewComponent
    },
    {
        path: 'listas-precios-materiales',
        component: ListasPreciosMaterialesViewComponent
    },
    {
        path: 'localizaciones',
        component: LocalizacionesViewComponent
    },
    {
        path: 'materiales',
        component: MaterialesViewComponent
    },
    {
        path: 'materiales-caracteristicas',
        component: MaterialesCaracteristicasViewComponent
    },
    {
        path: 'materiales-costos-promedios',
        component: MaterialesCostosPromediosViewComponent
    },
    {
        path: 'materiales-datos-compra',
        component: MaterialesDatosCompraViewComponent
    },
    {
        path: 'materiales-descripciones',
        component: MaterialesDescripcionesViewComponent
    },
    {
        path: 'mm-codigo-equivalente',
        component: MmCodigoEquivalenteViewComponent
    },
    {
        path: 'mm-tmc-caracteristica',
        component: MmTmcCaracteristicaViewComponent
    },
    {
        path: 'mm-tmcd-descripciones',
        component: MmTmcdDescripcionesViewComponent
    },
    {
        path: 'movimientos',
        component: MovimientosViewComponent
    },
    {
        path: 'movimientos-detalles',
        component: MovimientosDetallesViewComponent
    },
    {
        path: 'orden-de-trabajo',
        component: OrdenDeTrabajoViewComponent
    },
    {
        path: 'orden-produccion',
        component: OrdenProduccionViewComponent
    },
    {
        path: 'plan-compra',
        component: PlanCompraViewComponent
    },
    {
        path: 'remisiones',
        component: RemisionesViewComponent
    },
    {
        path: 'remisiones-compras',
        component: RemisionesComprasViewComponent
    },
    {
        path: 'remisiones-compras-materiales',
        component: RemisionesComprasMaterialesViewComponent
    },
    {
        path: 'remisiones-venta',
        component: RemisionesVentaViewComponent
    },
    {
        path: 'remisiones-venta-materiales',
        component: RemisionesVentaMaterialesViewComponent
    },
    {
        path: 'saldos',
        component: SaldosViewComponent
    },
    {
        path: 'sociedad',
        component: SociedadViewComponent
    },
    {
        path: 'tipo-interlocutor-comercial',
        component: TipoInterlocutorComercialViewComponent
    },
    {
        path: 'tipo-lista-material',
        component: TipoListaMaterialViewComponent
    },
    {
        path: 'tipo-unidad-medida',
        component: TipoUnidadMedidaViewComponent
    },
    {
        path: 'tipos-agentes',
        component: TiposAgentesViewComponent
    },
    {
        path: 'tipos-documentos',
        component: TiposDocumentosViewComponent
    },
    {
        path: 'tipos-documentos-conceptos',
        component: TiposDocumentosConceptosViewComponent
    },
    {
        path: 'tipos-documentos-tipos-agentes',
        component: TiposDocumentosTiposAgentesViewComponent
    },
    {
        path: 'tipos-materiales',
        component: TiposMaterialesViewComponent
    },
    {
        path: 'tipos-movimientos',
        component: TiposMovimientosViewComponent
    },
    {
        path: 'ubicaciones',
        component: UbicacionesViewComponent
    },
    {
        path: 'unidad-medida',
        component: UnidadMedidaViewComponent
    },
    {
        path: 'zonas',
        component: ZonasViewComponent
    },
];

/**
 * TODO: Description of {@code AlmacenRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlmacenRoutingModule { }
