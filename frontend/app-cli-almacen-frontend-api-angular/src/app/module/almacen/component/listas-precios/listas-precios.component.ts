/*
 * @overview        {ListasPreciosComponent}
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
import { ListasPreciosViewModel } from '../../model/listas-precios.model';

/**
 * TODO: Description of {@code ListasPreciosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-listas-precios',
    templateUrl: './listas-precios.component.html',
    standalone: false,
    styleUrls: ['./listas-precios.component.css']
})
export class ListasPreciosComponent extends GenericComponent<ListasPreciosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ListasPreciosViewModel) {
        super(entityInstance);
    }

}
