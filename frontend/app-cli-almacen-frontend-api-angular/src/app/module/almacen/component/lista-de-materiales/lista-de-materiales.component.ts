/*
 * @overview        {ListaDeMaterialesComponent}
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
import { ListaDeMaterialesViewModel } from '../../model/lista-de-materiales.model';

/**
 * TODO: Description of {@code ListaDeMaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-lista-de-materiales',
    templateUrl: './lista-de-materiales.component.html',
    standalone: false,
    styleUrls: ['./lista-de-materiales.component.css']
})
export class ListaDeMaterialesComponent extends GenericComponent<ListaDeMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ListaDeMaterialesViewModel) {
        super(entityInstance);
    }

}
