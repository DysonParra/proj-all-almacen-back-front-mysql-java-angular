/*
 * @overview        {ListasPreciosMaterialesComponent}
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
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { ListasPreciosMaterialesViewModel } from '../../model/listas-precios-materiales.model';

/**
 * TODO: Description of {@code ListasPreciosMaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-listas-precios-materiales',
    templateUrl: './listas-precios-materiales.component.html',
    standalone: false,
    styleUrls: ['./listas-precios-materiales.component.css']
})
export class ListasPreciosMaterialesComponent extends GenericComponent<ListasPreciosMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ListasPreciosMaterialesViewModel) {
        super(entityInstance);
    }

}
