import { CreateItemDto } from './dto/create-items.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    findOne(id: any): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: any): Promise<Item>;
    update(updateItemDto: CreateItemDto, id: any): Promise<Item>;
}
